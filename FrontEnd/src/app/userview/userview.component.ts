import { Component } from '@angular/core';
import { FileData } from '../model/FileData';
import { FileuploadService } from '../Service/fileupload.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {

  file:FileData;
  courseList: FileData[] = [];
  constructor(private us: FileuploadService ) {
    this.GetAllDetails();
    this.file = new FileData();

  }

  GetAllDetails() {
    this.us.getAllDetails().subscribe(cVal => this.courseList = cVal);
  }
}
