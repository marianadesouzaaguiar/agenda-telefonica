import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-container">
      <h1>Bem-vindo(a)!</h1>
      <p>Este é o painel de controle da sua agenda telefônica.</p>
      <div class="cards-container">
        <div class="card">
          <h3>Contatos</h3>
          <p>Gerencie todos os seus contatos.</p>
          <a routerLink="/contatos" class="card-link">Ir para Contatos</a>
        </div>
        <div class="card">
          <h3>Adicionar Contato</h3>
          <p>Adicione um novo contato à sua lista.</p>
          <a routerLink="/form-contato" class="card-link">Adicionar</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
}