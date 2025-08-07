import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  public isLoggedIn$: Observable<boolean> = this.loggedIn.asObservable();

  constructor() {}

  login(token: string) {
    localStorage.setItem('auth_token', token);
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  isAuthenticated(): boolean {
    return this.hasToken();
  }
}
