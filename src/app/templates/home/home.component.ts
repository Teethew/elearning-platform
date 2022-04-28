import { Component, OnInit } from '@angular/core';
import { ITrail } from 'src/app/model/trail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trails!: ITrail[];

  constructor() { }

  ngOnInit(): void {
    this.trails = this.listTrails()
  }

  listTrails(): ITrail[] {
    return [
      {
        id: 1,
        nome: "Spring Boot Masterclass",
        comentarios: [],
        categoria: "Desenvolvimento Web",
        videos: []
      },
      {
        id: 2,
        nome: "Angular 12 Desbravado",
        comentarios: [],
        categoria: "Desenvolvimento Web",
        videos: []
      },
      {
        id: 3,
        nome: "Rust: subindo o baixo nível",
        comentarios: [],
        categoria: "Engenharia de sistemas",
        videos: []
      }
    ]
  }

}
