import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListarContatosComponent } from './components/lista-contatos/lista-contatos.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'contatos', pathMatch: 'full' },
  { path: 'contatos', component: ListarContatosComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];


export const APP_ROUTES = provideRouter(routes);
export const AppRoutingModule = APP_ROUTES;