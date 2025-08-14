import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    MatIconModule
  ],
  template: `
    <h1>Angular Standalone + Material + HttpClient</h1>
    <mat-icon>home</mat-icon>
    <app-login></app-login>
  `
})
export class AppComponent {}
