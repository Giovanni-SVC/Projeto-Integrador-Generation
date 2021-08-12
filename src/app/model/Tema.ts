import { Postagem } from "./Postagem";

export class Tema {
    public id: number;
    public categoria: string;
    public descricao: string;
    public palavraChave: string;
    public postagem: Postagem[]
}
