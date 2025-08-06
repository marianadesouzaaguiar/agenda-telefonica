import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  adicionarContato: any;
  getContatosFavoritos() {
    throw new Error('Method not implemented.');
  }
  getContato() {
    return {
      nome: 'João da Silva',
      email: 'joao@email.com',
      telefone: '(11) 99999-9999',
      endereco: 'Rua Exemplo, 123'
    };
  }
}
