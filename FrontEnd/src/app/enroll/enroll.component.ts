import { Component } from '@angular/core';
import { Course } from '../model/Course';
import { CoureService } from '../Service/coure.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent {

  result:String="";
  cus: Course;
  courseList: Course[] = [];
  constructor(private us: CoureService) {
    this.GetAllDetails();
    this.cus = new Course();

  }

  GetAllDetails() {
    this.us.getAllDetails().subscribe(cVal => this.courseList = cVal);
  }

}
