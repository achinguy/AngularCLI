import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.canLoad();
  }

  canLoad(): Observable<boolean> {
    return this.authService.isLoggedIn$().pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) { this.router.navigate(['/login']); }
      })
    );
  }
}
