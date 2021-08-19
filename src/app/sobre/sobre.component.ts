import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // if(environment.token == ''){
    //   this.router.navigate(['/home'])
    // }

  }

}
