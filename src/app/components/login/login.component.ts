import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { AuthApiService, LoginRequest } from '../../services/auth-api.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  token: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthApiService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const data: LoginRequest = this.loginForm.value;
      this.authService.login(data).subscribe({
        next: (res) => this.token = res.token,
        error: (err) => console.error('Erro no login:', err)
      });
    }
  }
}
