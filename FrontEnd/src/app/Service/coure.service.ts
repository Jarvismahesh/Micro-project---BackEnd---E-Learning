import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoureService {


  private url:string="http://localhost:7070";

  constructor(private http:HttpClient) {}

    getAllDetails()
    {
      return this.http.get<Course[]>(this.url+"/ViewAllCourse");
    }

    insertDetails(lap : Course) {
      this.http.post(this.url + "/performInsertCourse", lap).subscribe();
      return "Record Inserted";
    }
  
    updateDetails(lap : Course) {
      this.http.put(this.url + "/performUpdateCourse", lap).subscribe();
      return "Record Updated";
    } 
  
    deleteDetails(lap : Course) {
      this.http.delete(this.url + "/performDeleteCourse/"+lap.courseId).subscribe();
      return "Record Deleted";
    } 

    

}
