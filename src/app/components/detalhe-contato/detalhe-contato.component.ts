import { Component } from '@angular/core';

interface Contato {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

@Component({
  selector: 'app-detalhe-contato',
  templateUrl: './detalhe-contato.component.html',
  styleUrls: ['./detalhe-contato.component.css']
})
export class DetalheContatoComponent {
  contato: Contato = {
    nome: 'João da Silva',
    email: 'joao@email.com',
    telefone: '(11) 99999-9999',
    endereco: 'Rua Exemplo, 123 - São Paulo, SP'
  };
}
