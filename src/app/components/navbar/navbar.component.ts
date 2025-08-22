// components/navbar/navbar.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router'; // Importe RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <a routerLink="/dashboard">Home</a>
      <a routerLink="/contatos">Contatos</a>
      <div *ngIf="isLoggedIn; else loginButton">
        <button (click)="logout()">Sair</button>
      </div>
      <ng-template #loginButton>
        <a routerLink="/login">Login</a>
      </ng-template>
    </nav>
  `,
  standalone: true,
  imports: [RouterModule, CommonModule], // Importe os módulos aqui
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Inscreve-se no Observable para reagir a mudanças no status de login
    this.authService.isAuthenticated$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}