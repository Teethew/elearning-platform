import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IListTrail, ITrail } from 'src/app/model/trail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trails$!: Observable<IListTrail[]>;

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.trails$ = this.listTrails()
  }

  listTrails(): Observable<IListTrail[]> {
    return this.http.get<IListTrail[]>('http://localhost:9001/trails')
  }

}
