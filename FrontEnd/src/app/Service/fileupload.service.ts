import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FileData } from '../model/FileData';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  private url:string="http://localhost:7070";
  
  constructor(private http:HttpClient) { }

  
  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file',file,file.name);    
    return this.http.post<any>(this.url+"/uploadpdf",formData);
  }

  getAllDetails()
  {
    return this.http.get<FileData[]>(this.url+"/ViewFiles");
  }


}
