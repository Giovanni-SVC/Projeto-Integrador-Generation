import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string
  idUser: number

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/home'])
    }
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipouser(event: any){
    this.tipoUsuario = event.target.value
  }

  atualizar(){

    // if(this.user.senha == this.confirmarSenha) {
    //   this.user.tipoUsuario = this.tipoUsuario
      this.authService.alterar(this.user).subscribe((resp: User) => {
      this.user = resp
      console.log(this.user)
      console.log(this.tipoUsuario)
      this.alertas.showAlertSuccess('Usuário atualizado com sucesso, faça o login novamente')
      this.router.navigate(['/feed-user'])
      })
    // }
  }
  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

}
