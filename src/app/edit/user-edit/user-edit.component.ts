import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/home'])
      // if(environment.tipoUsuario == 'normal'){
      //   this.router.navigate(['/feed-user'])
      // }else{
      //   this.router.navigate(['/feed-empresa'])
      // }
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value

  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  atualizar(){

    if(this.user.senha == this.confirmarSenha) {
      //this.user.tipoUsuario = this.tipoUsuario
      this.authService.alterar(this.user).subscribe((resp: User) => {
      this.user = resp
      console.log(this.user)
      console.log(this.tipoUsuario)
      if(environment.tipoUsuario == 'normal'){
        this.router.navigate(['/feed-user'])
      }else{
        this.router.navigate(['/feed-user'])
      }
      this.alertas.showAlertSuccess('Usuário atualizado com sucesso, faça o login novamente')
      environment.nome = ''
      environment.token = ''
      environment.id = 0
      environment.tipoUsuario = ''
      environment.foto =''
      this.router.navigate(['/login'])
      })
    } else {
      this.alertas.showAlertDanger('As senhas estão incorretas')
    }
  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

}
