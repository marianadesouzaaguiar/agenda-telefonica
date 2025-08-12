import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (submit)="login(); $event.preventDefault()">
        <input [(ngModel)]="username" name="username" type="text" placeholder="Usuário" required />
        <input [(ngModel)]="password" name="password" type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      <p class="message">{{ message }}</p>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 300px;
      margin: 5rem auto;
      padding: 1.5rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      text-align: center;
      background: #f9f9f9;
    }
    input {
      width: 100%;
      padding: .5rem;
      margin: .5rem 0;
      box-sizing: border-box;
    }
    button {
      width: 100%;
      padding: .7rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    .message {
      margin-top: 1rem;
      font-weight: bold;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  login() {
    if(this.username === 'admin' && this.password === '123') {
      this.message = 'Login realizado com sucesso!';
    } else {
      this.message = 'Usuário ou senha inválidos.';
    }
  }
}
