import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private apiUrl = 'http://localhost:8081/auth'; // ajuste conforme sua API

  constructor(private http: HttpClient) {}

  /**
   * Faz login no backend usando username e password
   * Espera que o backend retorne algo como { token: '...' }
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
}
