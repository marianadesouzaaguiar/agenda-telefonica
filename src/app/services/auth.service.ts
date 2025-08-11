import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Estado de login interno
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  // Observable para outros componentes acompanharem login/logout
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor() {}

  /**
   * Salva o token e atualiza estado para "logado"
   */
  login(token: string): void {
    localStorage.setItem('token', token);
    this.loggedIn.next(true);
  }

  /**
   * Remove token e atualiza estado para "deslogado"
   */
  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  /**
   * Verifica se o usuário está autenticado
   */
  isAuthenticated(): boolean {
    return this.hasToken();
  }

  /**
   * Retorna o token JWT
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Checa se existe token no localStorage
   */
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
