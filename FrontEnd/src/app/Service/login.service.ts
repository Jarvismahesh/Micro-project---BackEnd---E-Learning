import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string="http://localhost:7070";
  constructor(private http:HttpClient) { }
 
  login(User:any)
  {
    return this.http.post(this.url+"/login",User);
  }
  
}
