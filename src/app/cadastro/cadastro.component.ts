import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipouser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    //this.user.tipoUsuario = this.tipoUsuario
    //setar em cadastro de usuario
    this.user.tipoUsuario = 'normal'
    if(this.user.senha != this.confirmarSenha){
      this.alertas.showAlertDanger('As senhas estão incorretas!')
    }else{
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        console.log(this.user)
        this.router.navigate(['/login'])

        this.alertas.showAlertSuccess('Usuario cadastrado com sucesso')
      })
    }
  }

}
