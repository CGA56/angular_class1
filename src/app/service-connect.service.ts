import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceConnectService {

  constructor(private http:HttpClient ) { 
   }

  public getusuarios(){

    
    return this.http.get('https://reqres.in/api/users');
  }
}
