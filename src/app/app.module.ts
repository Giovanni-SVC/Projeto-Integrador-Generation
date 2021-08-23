//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';

// components
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
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { AlertasComponent } from './alertas/alertas.component';
import { SobreComponent } from './sobre/sobre.component';
import { FeedUserComponent } from './feed-user/feed-user.component';
import { ViewCurriculoComponent } from './view-curriculo/view-curriculo.component';
import { FeedEmpresaComponent } from './feed-empresa/feed-empresa.component';
import { MinhasVagasComponent } from './minhas-vagas/minhas-vagas.component';
import { MinhasCandidaturasComponent } from './minhas-candidaturas/minhas-candidaturas.component';




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
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    UserEditComponent,
    AlertasComponent,
    SobreComponent,
    FeedUserComponent,
    ViewCurriculoComponent,
    FeedEmpresaComponent,
    MinhasVagasComponent,
    MinhasCandidaturasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
