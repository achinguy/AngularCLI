import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retryWhen';
import { environment } from '../../environments/environment';
import { responseStatusCode } from '../constants/error-conts';
// import 'rxjs/Rx';
import { scan, publishReplay, refCount } from 'rxjs/operators';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const retry = Number(req.headers.get('retry')) || environment.httpConfig.apiRetryCount;
  //  const timeout = Number(req.headers.get('timeout')) || environment.httpConfig.httpTimeOutInMilliSeconds;
    return next.handle(req)
    .retryWhen(function (errors) {
      // console.log(errors);
      return errors.pipe.bind(function (errorCount, err) {  //instead of .pipe.bind it was .scan check functionality
         // console.log(new Date());
        //  console.log(retry, errors);

          if (errorCount > (retry - 1)) {
              throw err;
          } else if (!(err.status === responseStatusCode.connectionRefused ||
            err.status === responseStatusCode.serviceUnavailable  ||
            err.status === responseStatusCode.timeExpiry )) {
              throw err;
          }
          console.log('Retry count:' + (errorCount + 1 ));
          return errorCount + 1;
      }, 0).delay(environment.httpConfig.apiRetryIntervalInMilliSeconds);
    });
  }
}