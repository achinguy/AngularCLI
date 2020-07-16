import { HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
export abstract class InfraHttpHandler {
        abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
      }