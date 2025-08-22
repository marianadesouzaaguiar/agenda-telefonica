import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContatosComponent } from './components/lista-contatos/lista-contatos.component';
import { FormContatoComponent } from './components/form-contato/form-contato.component';
import { DetalheContatoComponent } from './components/detalhe-contato/detalhe-contato.component'; // Importe o novo componente

const routes: Routes = [
  { path: '', component: ListaContatosComponent },
  { path: 'form-contato', component: FormContatoComponent },
  { path: 'form-contato/:id', component: FormContatoComponent },
  { path: 'detalhe-contato/:id', component: DetalheContatoComponent }, // Adicione esta linha
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }