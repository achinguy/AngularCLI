import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { ErrorService } from '../error/error-service/error.service';
import { observeOn } from 'rxjs/operator/observeOn';
import 'rxjs/add/operator/catch';
import { skipInterceptor } from '../constants/constants';
@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {
    // private errorService: ErrorService;
    constructor(
        private injector: Injector
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.headers.has(skipInterceptor.skipApiErrorInterceptor)) {
            const headers = request.headers.delete(skipInterceptor.skipApiErrorInterceptor);
            return next.handle(request.clone({ headers }));
        } else {
            // this.errorService = this.injector.get(ErrorService);
            // return next.handle(request)
            //     .do((event: HttpEvent<any>) => {
            //         if (event instanceof HttpResponse) {
            //             // success response
            //             return this.errorService.handleAPISuccess(event);
            //         }
            //     }, (error: any) => {
            //         // Error response
            //         if (error instanceof HttpErrorResponse) {
            //             return this.errorService.handleAPIError(error);
            //         } else {
            //             return Observable.throw(error);
            //         }
            //     });
        }
    }
}