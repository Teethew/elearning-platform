import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IListTrail } from 'src/app/model/trail';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  trails$!: Observable<IListTrail[]>;

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.trails$ = this.listTrails()
  }

  listTrails(): Observable<IListTrail[]> {
    return this.http.get<IListTrail[]>('http://localhost:9001/trails')
  }

}
