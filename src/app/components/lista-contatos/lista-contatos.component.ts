import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent {
  contatos = [
    { contato_id: 1, nome: 'Mariana Aguiar', email: 'mariana@example.com' },
    { contato_id: 2, nome: 'Carlos Silva', email: 'carlos@example.com' },
    { contato_id: 3, nome: 'Ana Lima', email: 'ana@example.com' }
  ];
}
