import { HttpClient, HttpHandler, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { AppHttpHandler } from './app-http-handler';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import {  HttpClientModule, HTTP_INTERCEPTORS, HttpBackend, ɵHttpInterceptingHandler } from '@angular/common/http'; 


export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

// Interface to get reponse header data for Report Delivery Module

export interface IRequestOptionsForHeader {
  headers?: HttpHeaders;
  observe: 'response';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

/**
 * This class used for segregating http interceptors specific to http client.
 * DO NOT EXPORT this class outside of this file
 * It is intended to be used only by AppHttpClient
 */
class AppHandlerHttpClient extends HttpClient {
  constructor(handler: AppHttpHandler) {
    super(handler);
  }
}

/**
 * Application specific HttpClient. Angular Service needs to use this class instead of HttpClient
 */
@Injectable()
export class AppHttpClient {
  private baseURL:any;
  private http: AppHandlerHttpClient;
  constructor(injector: Injector) {
    this.baseURL = environment.endPointConfig.baseURL;
    setTimeout(() => {
      const handler = injector.get(HttpBackend, AppHttpHandler);
      this.http = new AppHandlerHttpClient(handler);
    });
    
  }

  /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    // demo of kamal's api. this is for testing purpose. By Kalyani
    // if (endPoint === 'api/values/123') {
    //   return this.http.get<T>('http://secureapidemo.azurewebsites.net/api/values/123', options);
    // } else {
      return this.http.get<T>(this.baseURL + endPoint, options);
    // }
  }

  /**
   * GET request to get reponse header data for Report Delivery Module. By Riyaz
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptionsForHeader} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public GetHeader<T>(endPoint: string, options?: IRequestOptionsForHeader): Observable<HttpResponse<T>> {
      return this.http.get<T>(this.baseURL + endPoint, options);
  }
 
   /**
   * GET request for demo purpose
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public GetDemo<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    // demo of kamal's api. this is for testing purpose. By Kalyani
    // if (endPoint === 'api/values/123') {
    //   return this.http.get<T>('http://secureapidemo.azurewebsites.net/api/values/123', options);
    // } else {
      return this.http.get<T>(endPoint, options);
    // }
  }

  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
    return this.http.post<T>(this.baseURL + endPoint, params, options);
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
    return this.http.put<T>(this.baseURL + endPoint, params, options);
  }

  /**
   * Patch request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Patch<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
    return this.http.patch<T>(this.baseURL + endPoint, params, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>(this.baseURL + endPoint, options);
  }
}