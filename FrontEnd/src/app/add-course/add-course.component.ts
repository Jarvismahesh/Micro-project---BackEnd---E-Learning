import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../model/Course';
import { CoureService } from '../Service/coure.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  courseForm: FormGroup;
  course: Course;
  result: String = "";

  constructor(private cour: CoureService)// Validation
  {
    this.courseForm = new FormGroup({
      courseName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
      courseCategory: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
    })
    this.course = new Course();
  }

  //Adding the Course Details
  addCourseDetails(data: any) {
    this.course.courseId = data.courseId;
    this.course.courseName = data.courseName;
    this.course.courseCategory = data.courseCategory;
    this.course.fileId = data.fileId;
    this.result = this.cour.insertDetails(this.course);  //Send the deta into the service
    alert("Course Upload Done")

  }



}
