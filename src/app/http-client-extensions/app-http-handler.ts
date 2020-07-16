import { HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { InjectionToken } from '@angular/core'
import {  HttpInterceptor }    from '@angular/common/http'; 
;
export abstract class AppHttpHandler {
        abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
      }

export const App_HTTP_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>('App_HTTP_INTERCEPTORS');