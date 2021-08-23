import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nome = environment.nome
  token = environment.token
  id = environment.id
  tipoUsuario = environment.tipoUsuario
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    environment.token == ''
    window.scroll(0,0)
    this.sair()
  }

  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
    environment.tipoUsuario = ''

  }

}
