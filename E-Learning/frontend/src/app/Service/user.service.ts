import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string="http://localhost:7070";

  constructor(private http:HttpClient) {}

    getAllDetails()
    {
      return this.http.get<User[]>(this.url+"/ViewAllUser");
    }

    insertDetails(lap : any) {
      this.http.post(this.url + "/register", lap).subscribe();
      return "Record Inserted";
    }
  
    updateDetails(lap : User) {
      this.http.put(this.url + "/performUpdateUser", lap).subscribe();
      return "Record Updated";
    } 
  
    deleteDetails(lap : User) {
      this.http.delete(this.url + "/performDeleteUser/"+lap.userId).subscribe();
      return "Record Deleted";
    } 

    
   
}
