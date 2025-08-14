import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthApiService, LoginRequest } from '../../services/auth-api.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onSubmit()">
      <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required />
      <input type="password" [(ngModel)]="senha" name="senha" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
    <p *ngIf="token">Token recebido: {{ token }}</p>
  `
})
export class LoginComponent {
  email = '';
  senha = '';
  token: string | null = null;

  constructor(private authService: AuthApiService) {}

  onSubmit() {
    const data: LoginRequest = { email: this.email, senha: this.senha };
    this.authService.login(data).subscribe({
      next: (res) => this.token = res.token,
      error: (err) => console.error('Erro no login:', err)
    });
  }
}
