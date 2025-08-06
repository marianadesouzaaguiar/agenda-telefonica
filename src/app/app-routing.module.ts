import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormContatoComponent } from './components/form-contato/form-contato.component';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
  { path: 'contato', loadComponent: () => import('./components/form-contato/form-contato.component').then(m => m.FormContatoComponent) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const APP_ROUTES = provideRouter(routes);
export const AppRoutingModule = APP_ROUTES;