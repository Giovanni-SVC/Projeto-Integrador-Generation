import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{

    public id: number
    public anexo: number
    public titulo: string
    public data: Date
    public conteudo: string
    public usuario: User
    public tema: Tema
}


