import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe-contato.component.html',
  styleUrls: ['./detalhe-contato.component.css']
})
export class DetalheContatoComponent {
  contato = {
    nome: 'Contato Exemplo',
    email: 'contato@exemplo.com'
  };
}
