import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <h2>Adicionar Contato</h2>
    <form [formGroup]="contatoForm" (ngSubmit)="onSubmit()">
      <label>
        Nome:
        <input type="text" formControlName="nome" />
      </label>
      <div *ngIf="contatoForm.get('nome')?.invalid && contatoForm.get('nome')?.touched">
        Nome é obrigatório.
      </div>

      <label>
        Telefone:
        <input type="tel" formControlName="telefone" />
      </label>
      <div *ngIf="contatoForm.get('telefone')?.invalid && contatoForm.get('telefone')?.touched">
        Telefone é obrigatório.
      </div>

      <label>
        Email:
        <input type="email" formControlName="email" />
      </label>

      <label>
        Favorito:
        <input type="checkbox" formControlName="favorito" />
      </label>

      <button type="submit" [disabled]="contatoForm.invalid">Salvar</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 400px;
    }
  `]
})
export class FormContatoComponent {
  contatoForm: FormGroup;
  form: any;

  constructor(private fb: FormBuilder) {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: [''],
      favorito: [false]
    });
  }

  onSubmit() {
    if (this.contatoForm.valid) {
      console.log('Contato salvo:', this.contatoForm.value);
      // salvar no backend futuramente
    }
  }
}
