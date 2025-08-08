import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Defina o tipo do contato (ajuste conforme seu modelo)
interface Contato {
  id?: number;
  nome: string;
  celular: string;
  email: string;
  telefone: string;
  favorito: 'S' | 'N'; // ou string se preferir
}

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Celular</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Favorito</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let c of contatos">
          <td>{{ c.nome }}</td>
          <td>{{ c.celular }}</td>
          <td>{{ c.email }}</td>
          <td>{{ c.telefone }}</td>
          <td>
            <button (click)="favoritar(c.id!)" class="btn btn-sm btn-warning">
              {{ c.favorito === 'S' ? '⭐' : '✩' }}
            </button>
          </td>
          <td>
            <button (click)="inativar(c.id!)" class="btn btn-sm btn-danger">Inativar</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./lista-contatos.component.css'] // se tiver estilos separados
})
export class ListaContatosComponent implements OnInit {

  contatos: Contato[] = [];

  ngOnInit() {
    // Exemplo: carrega contatos de um serviço ou define fixo para testes
    this.contatos = [
      { id: 1, nome: 'Mariana', celular: '99999-9999', email: 'maria@example.com', telefone: '3333-3333', favorito: 'N' },
      { id: 2, nome: 'João', celular: '98888-8888', email: 'joao@example.com', telefone: '2222-2222', favorito: 'S' },
    ];
  }

  favoritar(id: number) {
    const contato = this.contatos.find(c => c.id === id);
    if (contato) {
      contato.favorito = contato.favorito === 'S' ? 'N' : 'S';
    }
  }

  inativar(id: number) {
    this.contatos = this.contatos.filter(c => c.id !== id);
  }

}
