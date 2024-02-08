import { Component } from '@angular/core';
import { FileData } from '../model/FileData';
import { FileuploadService } from '../Service/fileupload.service';

@Component({
  selector: 'app-filetable',
  templateUrl: './filetable.component.html',
  styleUrls: ['./filetable.component.css']
})
export class FiletableComponent {

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
