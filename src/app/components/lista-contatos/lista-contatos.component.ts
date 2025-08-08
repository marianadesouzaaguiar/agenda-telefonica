import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../models/Contato';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html'
})
export class ListarContatosComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.contatoService.listar().subscribe(data => {
      this.contatos = data;
    });
  }

  inativar(id: number): void {
    this.contatoService.inativar(id).subscribe(() => {
      this.contatos = this.contatos.filter(c => c.id !== id);
    });
  }

  favoritar(id: number): void {
    this.contatoService.favoritar(id).subscribe(() => {
      const contato = this.contatos.find(c => c.id === id);
      if (contato) {
        contato.favorito = contato.favorito === 'S' ? 'N' : 'S';
      }
    });
  }
}

