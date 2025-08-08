import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListaContatosComponent } from './components/lista-contatos/lista-contatos.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'contatos', pathMatch: 'full' },
  { path: 'contatos', component: ListaContatosComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];


export const APP_ROUTES = provideRouter(routes);
export const AppRoutingModule = APP_ROUTES;