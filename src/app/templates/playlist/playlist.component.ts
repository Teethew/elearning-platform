import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ITrail } from "../../model/trail";
import {Observable, Observer} from "rxjs";
import {IVideo} from "../../model/video";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  id!: string | number
  trail!: ITrail
  videos!: IVideo[]
  videoIds: string[] = []

  constructor(
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id']
    })

    this.loadPlaylist()
  }

  private loadPlaylist(): void {
    this.getPlaylistVideosById(this.id)
  }

  private getPlaylistVideosById(id: string | number): void {
    this.http
      .post<ITrail[]>(`http://localhost:9001/trails/${id}/videos`, {})
      .subscribe(this.trailObserver)
  }

  private trailObserver: Observer<ITrail[]> = {
    next: (resp): void => {
      console.log(resp)
      this.trail = resp[0]
      this.videos = this.trail.Videos
    },
    error: (err: any): void => console.error(err),
    complete: (): void => this.videos.forEach(video => {
      this.videoIds.push(video.url.split('=')[1])
    })
  }
}
