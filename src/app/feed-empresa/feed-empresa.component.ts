import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed-empresa',
  templateUrl: './feed-empresa.component.html',
  styleUrls: ['./feed-empresa.component.css']
})
export class FeedEmpresaComponent implements OnInit {
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPost: string
  conteudo: string
  

  listaTemas: Tema[]
  idTema: number
  tema: Tema = new Tema()
  categoria: string
  palavraChave: string
  palavraR: Postagem

  user: User = new User()
  idUser = environment.id
  nome = environment.nome
  tipoUsuario = environment.tipoUsuario
  foto = environment.foto

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    // if(environment.token == ''){
    // this.alertas.showAlertInfo('Faça o login')
    //  this.router.navigate(['/home'])
    // }

    this.getAllTemas()
    this.getAllPostagens()
    // this.findByCategoriaTema()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      console.log(this.postagem)
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })

  }

  findByTituloPostagem(){
    // this.tituloPost = this.user.nomeCompleto
    if(this.tituloPost == ''){
      this.getAllPostagens()
      }else{
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
      })
    }
  }

  findByConteudoPostagem(){

    if(this.conteudo == ''){
      this.getAllPostagens()
      }else{
      this.postagemService.getByConteudoPostagem(this.conteudo).subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
      })
    }
  }

  findByCategoriaTema(){
    // this.categoria = 'Curriculos'
    if(this.categoria == ''){
      this.getAllTemas()
      }else{
      this.temaService.getByCategoriaTema(this.categoria).subscribe((resp: Tema[])=>{
        this.listaTemas = resp
      })
    }
  }

  findByPalavraChaveTema(){

    if(this.palavraChave == ''){
      this.getAllPostagens()
      }else{
      this.temaService.getByPalavraChaveTema(this.palavraChave).subscribe((resp: Tema[])=>{
        this.listaTemas = resp
      })
    }
  }
}
