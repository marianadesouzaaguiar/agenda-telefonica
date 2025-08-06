import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this._isLoggedIn.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Só acessa localStorage se estiver no navegador
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      this._isLoggedIn.next(!!token);
    }
  }

  login(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
    this._isLoggedIn.next(true);
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this._isLoggedIn.next(false);
  }

  // Método auxiliar para checar login sem usar subscribe
  isLoggedIn(): boolean {
    return this._isLoggedIn.getValue();
  }
}
