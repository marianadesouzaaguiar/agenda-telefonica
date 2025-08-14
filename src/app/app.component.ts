import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatIconModule, LoginComponent],
  template: `
    <h1>Angular Standalone + Material + HttpClient</h1>
    <mat-icon>home</mat-icon>
    <app-login></app-login>
  `
})
export class AppComponent {}
