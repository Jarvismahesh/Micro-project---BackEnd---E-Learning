import { Component, OnInit } from '@angular/core';
import { FileuploadService } from '../Service/fileupload.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-courseupload',
  templateUrl: './courseupload.component.html',
  styleUrls: ['./courseupload.component.css']
})
export class CourseuploadComponent {

  selectedFile: File | undefined;
  uploadloadmsg:boolean=false;
  errormsg:string="";

  constructor(private FileuploadService: FileuploadService) { }

  onFileSelector(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.FileuploadService.upload(this.selectedFile).subscribe(response => {
        console.log('File Uploaded Successfully : ', response); 
        alert("File Uploaded Successfully") 
        this.uploadloadmsg=true; 
        this.errormsg="";
      },
        error => {
          console.log('Error Uploading : ', error);
          this.uploadloadmsg=false;
          this.errormsg="Error Occured during Upload";
        }
      );
    }
  }
}






