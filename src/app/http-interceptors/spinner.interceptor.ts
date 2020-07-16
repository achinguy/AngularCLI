import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/finally';
import { SpinnerService } from '../spinner/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

    private spinnerService: SpinnerService;
    constructor(
        private injector: Injector
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const hideSpinner = request.headers.get('hideSpinner') || false;
        if (!hideSpinner) {
            console.log('calling interceptor spinner');
            this.spinnerService = this.injector.get(SpinnerService);
            this.spinnerService.showSpinner();
            return next.handle(request)
                .finally(() => {
                    this.spinnerService.hideSpinner();
                });
        } else {
            return next.handle(request);
        }
    }
}