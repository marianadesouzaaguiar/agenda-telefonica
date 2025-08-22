import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Contato } from '../../models/Contato.model';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-detalhe-contato',
  templateUrl: './detalhe-contato.component.html',
  styleUrls: ['./detalhe-contato.component.css'],
  standalone: true, 
  imports: [CommonModule] 
})
export class DetalheContatoComponent implements OnInit {
  contato: Contato | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getContato();
  }

  getContato(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.contatoService.getContato(id).subscribe({ 
        next: (contato) => {
          this.contato = contato;
          this.loading = false;
        },
        error: (error) => {
          console.error('Erro ao buscar o contato:', error);
          this.loading = false;
        }
      });
    } else {
      console.error('ID do contato não fornecido na URL.');
      this.loading = false;
    }
  }

  deletarContato(): void {
    if (this.contato && confirm('Tem certeza que deseja deletar este contato?')) {
      this.contatoService.deleteContato(this.contato.id!).subscribe({ // <-- Corrigido
        next: () => {
          console.log('Contato deletado com sucesso!');
          this.router.navigate(['/']);
        },
        error: (error) => console.error('Erro ao deletar contato:', error) // <-- Corrigido
      });
    }
  }

  editarContato(): void {
    if (this.contato) {
      this.router.navigate(['/form-contato', this.contato.id]);
    }
  }

  voltarParaLista(): void {
    this.router.navigate(['/']);
  }
}