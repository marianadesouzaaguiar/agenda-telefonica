import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { FormContatoComponent } from './components/form-contato/form-contato.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'form-contato', component: FormContatoComponent },
  // ... outras rotas
  { path: '**', redirectTo: 'dashboard' } // Rota curinga para URLs não encontradas
];