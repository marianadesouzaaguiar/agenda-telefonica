import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent {
  contatos = [
    { nome: 'Fulano' },
    { nome: 'Ciclano' }
  ];
}
