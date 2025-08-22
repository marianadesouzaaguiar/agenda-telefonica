import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <div class="contatos-container">
      <h2>Seus Contatos</h2>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent { }