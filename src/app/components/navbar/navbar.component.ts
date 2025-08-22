import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <a routerLink="/dashboard">Home</a>
      <a routerLink="/contatos">Contatos</a>
      <div *ngIf="isLoggedIn; else loginButton">
        <a routerLink="/logout">Sair</a>
      </div>
      <ng-template #loginButton>
        <a routerLink="/login">Login</a>
      </ng-template>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }
}