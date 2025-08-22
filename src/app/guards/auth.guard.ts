import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../app/services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.auth.isAuthenticated$.pipe(
      map(isAuth => {
        if (isAuth) {
          return true; // Permite a navegação se o usuário estiver autenticado
        } else {
          // Redireciona para a página de login se não estiver autenticado
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}