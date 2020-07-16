import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { InfraHttpHandler } from './infra-http-handler';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;   
}

/**
 * This class used for segregating http interceptors specific to http client.
 * DO NOT EXPORT this class outside of this file
 * It is intended to be used only by InfraHttpClient
 */
class InfraHandlerHttpClient extends HttpClient {
  constructor(handler: InfraHttpHandler) {
    super(handler);
  }
}

/**
 * Application specific HttpClient. Angular Service needs to use this class instead of HttpClient
 */
@Injectable()
export class InfraHttpClient {
  private baseURL;
  private http: InfraHandlerHttpClient;
  constructor(injector: Injector) {
    this.baseURL = environment.endPointConfig.baseURL;
    const handler = injector.get(InfraHttpHandler);
    this.http = new InfraHandlerHttpClient(handler);
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