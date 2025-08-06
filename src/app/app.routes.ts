import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { FormContatoComponent } from '../app/components/form-contato/form-contato.component';
import { LoginComponent } from '../app/components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'contatos',
    component: FormContatoComponent,
    canActivate: [AuthGuard]
  }
];
