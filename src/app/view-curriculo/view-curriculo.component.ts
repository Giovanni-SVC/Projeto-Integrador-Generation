import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-view-curriculo',
  templateUrl: './view-curriculo.component.html',
  styleUrls: ['./view-curriculo.component.css']
})
export class ViewCurriculoComponent implements OnInit {

  listauser: User[]
  listaPostagem: Postagem[]
  user: User = new User()
  idUser: number
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(){
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

}
