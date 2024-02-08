import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResigterComponent } from './resigter/resigter.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { UserComponent } from './user/user.component';
import { CourseuploadComponent } from './courseupload/courseupload.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AdminAccessComponent } from './admin-access/admin-access.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { FiletableComponent } from './filetable/filetable.component';
import { EnrollComponent } from './enroll/enroll.component';
import { UserviewComponent } from './userview/userview.component';
import { ScreenComponent } from './screen/screen.component';


const routes: Routes = [
  {path:'',component:ScreenComponent},
  { path: 'Register', component: ResigterComponent },
   { path: 'Login', component: LoginComponent },
  { path: 'CourseTable', component: CourseComponent },
   { path: 'UserTable', component: UserComponent },
  { path: 'FileUpload', component: CourseuploadComponent }, 
  { path: 'AddCourse', component: AddCourseComponent },
  { path: "EditUser", component: EditUserComponent }, 
  { path: 'DeleteUserData', component: DeleteuserComponent },
  {path:'Wallpaper',component:ScreenComponent},

   { path: 'DeleteCourse', component: DeleteCourseComponent },
  { path: 'AdminHome', component: AdminAccessComponent }, 
  { path: 'UserHome', component: UserAccessComponent },


  { path: 'AdminHome/CourseTable', component: CourseComponent },
   { path: 'AdminHome/UserTable', component: UserComponent },
  { path: 'AdminHome/DeleteCourse', component: DeleteCourseComponent },
  { path: "AdminHome/EditUser", component: EditUserComponent }, 
  { path: 'AdminHome/FileUpload', component: CourseuploadComponent },
  { path: 'AdminHome/CourseTable', component: CourseComponent },
  {path:'AdminHome/ViewFile',component:UserviewComponent},


  { path: 'UserHome/Enroll', component: EnrollComponent },
  {path:'UserHome/Enroll/ViewFile',component:UserviewComponent},
  {path:'file',component:FiletableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
