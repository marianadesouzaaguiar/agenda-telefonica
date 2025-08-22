import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Contatos Favoritos</h2>
    <p>Ainda não há contatos favoritos.</p>
  `,
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent { }