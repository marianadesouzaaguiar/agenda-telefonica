// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormContatoComponent } from './components/form-contato/form-contato.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'contato', component: FormContatoComponent },
];
