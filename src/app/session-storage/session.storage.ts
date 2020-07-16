import { Injectable, Inject } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable()
export class SessionStorage {
    public data: any = [];
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  getSessionStorageValue(key): any {
    this.data[key] = this.storage.get(key);
    return this.data;
   }
   setSessionStorageValue(key, val): void {
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
   }
   clearSessionStorage(key): void {
     this.storage.remove(key);
   }
}