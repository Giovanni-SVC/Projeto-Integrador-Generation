import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  token = environment.token
  id = environment.id
  menu: string
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(environment.tipoUsuario == 'normal'){
      this.menu = "Vagas"
    } else{
      this.menu = "Curriculos"
    }
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0

  }

}
