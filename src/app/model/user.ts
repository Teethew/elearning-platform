export interface IUser {
    id: number;
    nome: string;
    email: string;
    senha: string;
    ehadmin: boolean;
    blocked: boolean;
    banned: boolean;
}

export interface ILoginUser {
    email: string;
    senha: string;
}

export interface IPostUser {
    nome: string;
    email: string;
    senha: string;
    ehadmin: boolean;
}