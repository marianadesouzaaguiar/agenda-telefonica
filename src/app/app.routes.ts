// app.routes.ts (ou app-routing.module.ts)

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { AuthGuard } from './guards/auth.guard'; 

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard] // Proteja a rota do dashboard
  },
  // ... outras rotas (para contatos, etc.)
  { path: '**', redirectTo: 'dashboard' } // Rota curinga
];