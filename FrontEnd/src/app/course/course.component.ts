import { Component } from '@angular/core';
import { Course } from '../model/Course';
import { CoureService } from '../Service/coure.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
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
