import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/timeoutWith';
import { environment } from '../../environments/environment';
import { errorMessages, responseStatusCode } from '../constants/error-conts';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const timeout = Number(req.headers.get('timeout')) || environment.httpConfig.apiTimeOutInMilliSeconds;
      return next.handle(req).timeoutWith(timeout, Observable.throw(
        new HttpErrorResponse({
          'error': 'Angular retried for so long to hear from API...timeout exceeded',
          'headers': null,
          'status': responseStatusCode.timeExpiry,
          'statusText': 'Angular retried for so long to hear from API...timeout exceeded',
          'url': req.urlWithParams,
       })));

    }
  }