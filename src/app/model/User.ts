import { Postagem } from "./Postagem"

export class User {
    public id: number
    public cep: string
    public cnpj: string
    public cursos: string
    public dataNascimento: Date
    public empregador: boolean
    public endereco: string
    public experiencia1: string
    public experiencia2: string
    public experiencia3: string
    public formacaoAcademica: string
    public idiomas: string
    public informacoesAdicionais: string
    public login: string
    public nomeCompleto: string
    public nomeEmpresa: string
    public numeroCasa: string
    public objetivoProfissional: string
    public rne: string
    public senha: string
    public telefone: string
    public postagem: Postagem[]

}
