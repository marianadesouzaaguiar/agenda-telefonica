import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="logout()">Sair</button>`
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
  }
}