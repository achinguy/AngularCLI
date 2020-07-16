import { Injectable } from '@angular/core';   
import {Http, Response, Headers, RequestOptions } from '@angular/http';   
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  requestOptions: any;

  constructor(private http: HttpClient) { }

  saveUser(user){  
    if(user.mode === 'Update'){
      return this.http.put('http://localhost:8081/api/user/'+ user.id, user)  
      .pipe(map((response: any) => response));       
    } else {
      return this.http.post('http://localhost:8081/api/user/', user)  
      .pipe(map((response: any) => response));       
    } 
  }  
  
  GetUser(pageNumber, pageSize, searchText){       
    this.requestOptions = {
      observe: 'response'
    };
    let urlData = 'PageNumber=' + pageNumber + '&PageSize=' + pageSize;
    if (searchText) {
      urlData = urlData + '&searchText=' + searchText;
    }
    
    return this.http.get('http://localhost:8081/api/user?'+urlData, this.requestOptions)  
            .pipe(map((response: any) => response
            ));              
  }  
 deleteUser(id){   
    return this.http.delete('http://localhost:8081/api/user/'+ id)  
            .pipe(map((response: any) => response));            
  }  
}
