import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { AppHttpClient } from '../http-client-extensions/app-http-client';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { User, Role, config } from '../model/user';
import { AuthStrategy, AUTH_STRATEGY } from './auth.strategy';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly INITIAL_PATH = '/userinfo';
  public readonly ADMIN_PATH = '/admin';
  public readonly LOGIN_PATH = '/login';
  public readonly CONFIRM_PATH = '/confirm';


  constructor(
    private router: Router,
    private httpclient: AppHttpClient,
    private http: Http,
    @Inject(AUTH_STRATEGY) private auth: AuthStrategy<any>
  ) { }

  getInitialPathForRole(role: Role): string {
    return role === 'ADMIN' ? this.ADMIN_PATH : this.INITIAL_PATH;
  }

  signup(user: User): Observable<void> {
    return this.httpclient.Post(`${config.authUrl}/signup`, user).pipe(map((response: any) => {
      return response;
    }
    ));
  }

  // confirm(email: string, code: string): Observable<void> {
  //   return this.http.get<any>(`${config.authUrl}/confirm?email=${email}&code=${code}`);
  // }

  login(user: User) {
    return this.httpclient.Post('login', user)
      .pipe(tap(data => {
        console.log(data);
        this.auth.doLoginUser(data);
        return data;
      },
      error => {
        console.log('Log the error here: ', error);
      }
      )).map(res => res);
  }

  logout() {
    return this.httpclient.Get(`${config.authUrl}/logout`)
      .pipe(tap(() => this.doLogoutUser()));
  }

  isLoggedIn$(): Observable<boolean> {
    return this.auth.getCurrentUser().pipe(
      map(user => !!user)
    );
  }

  getUserRole$(): Observable<string> {
    return this.auth.getCurrentUser().pipe(
      map(user => user.role)
    );
  }

  getUserEmail$(): Observable<string> {
    return this.auth.getCurrentUser().pipe(
      map(user => user.email)
    );
  }

  logoutAndRedirectToLogin() {
    this.doLogoutUser();
    this.router.navigate(['/login']);
  }

  private doLogoutUser() {
    // this.cacheService.pruneAll();
    this.auth.doLogoutUser();
  }
}
