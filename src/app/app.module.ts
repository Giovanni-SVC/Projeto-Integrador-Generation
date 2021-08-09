import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    ContatoComponent,
    CurriculoComponent,
    EmpresaComponent,
    InfoComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
