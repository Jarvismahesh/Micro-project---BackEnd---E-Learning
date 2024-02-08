import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoureService } from '../Service/coure.service';
import { Course } from '../model/Course';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent {

  deleteCourseForm: FormGroup;
  cor: Course;
  result: String = "";

  constructor(private user: CoureService) {
    this.deleteCourseForm = new FormGroup({
      courseId : new FormControl("", [Validators.required, Validators.pattern('[0-9]')]),
    })

    this.cor = new Course();
  }
  DeleteuserDetails(data: any) {
    this.cor.courseId = data.courseId;
    this.result = this.user.deleteDetails(this.cor);
    alert("Course Deleted Successfully")
  }  
}
