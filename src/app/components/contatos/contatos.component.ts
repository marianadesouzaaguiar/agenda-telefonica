import { Component, OnInit } from '@angular/core';
import { Contato } from '../../models/Contato.model';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
})
export class ContatosComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.contatoService.listarContatos().subscribe({
      next: (data) => this.contatos = data,
      error: (err) => console.error(err)
    });
  }
}
