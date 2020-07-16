import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User, config, Role } from '../model/user';
import { AuthService } from '../services/auth.service';
import { JwtAuthStrategy } from '../services/jwt-auth.strategy';
import { AUTH_STRATEGY } from '../services/auth.strategy';
import 'rxjs/add/operator/do';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, @Inject(AUTH_STRATEGY) private jwt: JwtAuthStrategy) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;

    const authToken = this.jwt.getToken();
    if (authToken) {
      let headerValue = request.headers.set('Authorization', 'Bearer ' + authToken);
      
      authReq = request.clone({
        headers: headerValue
      }); 

      return next.handle(authReq);
    } else {
      const tokenCallbackResult: ReplaySubject<string> = new ReplaySubject<string>(1);
      const renewTokenCallBack = (error, token) => {
        console.log('Acquired Token: ', token);
     if (error) {
          console.error('error during renewal:', error);
          tokenCallbackResult.error(error);
        } else {
          console.log('Renew token success:', token);

      let headerValue = request.headers.set('Authorization', 'Bearer ' + authToken);
      authReq = request.clone({
        headers: headerValue
      }); 
      tokenCallbackResult.next('success');
        }
       // tokenCallbackResult.next('success');
      };
      return tokenCallbackResult.mergeMap(() => next.handle(authReq));
    }
  }
}

