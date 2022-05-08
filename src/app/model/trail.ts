// "id" INT PRIMARY KEY NOT NULL,
//   "owner" INT NOT NULL,
//   "nome" VARCHAR(100),
//   "comentarios" VARCHAR(200),
//   "categoria" VARCHAR(100),
//   "fk_id_video" INT

import {IVideo} from "./video";

export interface IListTrail {
    id: number,
    owner: number,
    nome: string,
    categoria: string,
    capa: string
}

export interface ITrail {
    id: number,
    nome: string,
    owner: string,
    capa: string,
    categoria: string,
    //videos: IVideo[]
    Videos: IVideo[]
}
