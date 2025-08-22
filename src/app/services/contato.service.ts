import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../models/Contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private apiUrl = 'http://localhost:8080/api/contatos';

  constructor(private http: HttpClient) {}

  getContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }

  getContato(id: number): Observable<Contato> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Contato>(url);
  }

  deleteContato(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  adicionarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }

  atualizarContato(id: number, contato: Contato): Observable<Contato> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Contato>(url, contato);
  }
}