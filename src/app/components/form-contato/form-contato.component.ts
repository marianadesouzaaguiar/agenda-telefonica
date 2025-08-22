import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-form-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.css']
})
export class FormContatoComponent implements OnInit {
  formContato!: FormGroup;
  modoEdicao: boolean = false;
  contatoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contatoService: ContatoService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.contatoId = +idParam;
        this.modoEdicao = true;
        this.contatoService.getContato(this.contatoId).subscribe(contato => {
          this.formContato.patchValue(contato);
        });
      }
    });
  }

  initForm(): void {
    this.formContato = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]],
      telefone: [''],
      endereco: ['']
    });
  }

  salvar(): void {
    if (this.formContato.invalid) {
      this.formContato.markAllAsTouched();
      return;
    }

    const contatoData = this.formContato.value;
    
    if (this.modoEdicao && this.contatoId) {
      this.contatoService.atualizarContato(this.contatoId, contatoData).subscribe(() => {
        this.router.navigate(['/contatos']);
      });
    } else {
      this.contatoService.adicionarContato(contatoData).subscribe(() => {
        this.router.navigate(['/contatos']);
      });
    }
  }
}