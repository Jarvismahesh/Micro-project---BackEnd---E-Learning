import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResigterComponent } from './resigter/resigter.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { CourseuploadComponent } from './courseupload/courseupload.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { FiletableComponent } from './filetable/filetable.component';
import { EnrollComponent } from './enroll/enroll.component';
import { UserviewComponent } from './userview/userview.component';
import { AdminAccessComponent } from './admin-access/admin-access.component';
import { RouterModule } from '@angular/router';
import { ScreenComponent } from './screen/screen.component';


@NgModule({
  declarations: [
    AppComponent,
    ResigterComponent,
    LoginComponent,
    CourseComponent,
    UserComponent,
    CourseuploadComponent,
    EditUserComponent,
    AddCourseComponent,
    DeleteuserComponent,
    UserAccessComponent,
    DeleteCourseComponent,
    FiletableComponent,
    EnrollComponent,
    UserviewComponent,
    AdminAccessComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
