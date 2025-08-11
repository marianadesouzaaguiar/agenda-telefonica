import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '././components/login/login.component';
import { DashboardComponent } from '././components/dashboard/dashboard.component'; // exemplo de componente protegido
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]  // só acessa se estiver logado
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // rota default
  { path: '**', redirectTo: 'dashboard' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
