import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  login() {
    // Aqui você coloca a lógica de autenticação
    if (this.username === 'admin' && this.password === '123') {
      this.message = 'Login realizado com sucesso!';
    } else {
      this.message = 'Usuário ou senha inválidos.';
    }
  }
}
