import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContatosComponent } from './components/contatos/contatos.component'; 
import { DetalheContatoComponent } from './components/detalhe-contato/detalhe-contato.component'; 

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'contatos/:id', component: DetalheContatoComponent }, // rota com parâmetro id
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
