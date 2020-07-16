/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { InjectionToken } from '@angular/core';
import { ApiErrorInterceptor } from './api-error.interceptor';
import { SpinnerInterceptor } from './spinner.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';
import { RetryInterceptor } from './retry.interceptor';


export const APP_HTTP_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>('APP_HTTP_INTERCEPTORS');
/** Http interceptor providers in outside-in order */
export const appHttpInterceptorProviders = [
  { provide: APP_HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  { provide: APP_HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
 { provide: APP_HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
 { provide: APP_HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
 { provide: APP_HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true },
];

export const INFRA_HTTP_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>('INFRA_HTTP_INTERCEPTORS');
/** Http interceptor providers in outside-in order */
export const infraHttpInterceptorProviders = [
  { provide: INFRA_HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];