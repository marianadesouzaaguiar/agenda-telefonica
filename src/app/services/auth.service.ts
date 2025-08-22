import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'authToken';
  private isAuthenticatedSubject: BehaviorSubject<boolean>;

  public isAuthenticated$: Observable<boolean>;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    let initialAuthStatus = false;
    // CRITICAL: Only access localStorage if the code is running in a browser
    if (isPlatformBrowser(this.platformId)) {
      initialAuthStatus = !!localStorage.getItem(this.TOKEN_KEY);
    }
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(initialAuthStatus);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }

  public login(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.TOKEN_KEY, token);
      this.isAuthenticatedSubject.next(true);
    }
  }

  public logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.TOKEN_KEY);
      this.isAuthenticatedSubject.next(false);
    }
    this.router.navigate(['/login']);
  }

  public getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }
}