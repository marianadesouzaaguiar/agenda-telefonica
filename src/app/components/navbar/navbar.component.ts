import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <button *ngIf="isLoggedIn" (click)="logout()">Sair</button>
    </nav>
  `
})
export class NavbarComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe(status => this.isLoggedIn = status);
  }

  logout() {
    this.authService.logout();
  }
}
