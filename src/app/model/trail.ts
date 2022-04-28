// "id" INT PRIMARY KEY NOT NULL,
//   "owner" INT NOT NULL,
//   "nome" VARCHAR(100),
//   "comentarios" VARCHAR(200),
//   "categoria" VARCHAR(100),
//   "fk_id_video" INT

export interface ITrail {
    id: number,
    nome: string,
    comentarios: string[],
    categoria: string,
    //videos: IVideo[]
    videos: string[]
}