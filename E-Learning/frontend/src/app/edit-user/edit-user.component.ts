import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  edituserForm:FormGroup;
  usr:User;
  result:String="";

  constructor(private user:UserService)
  {
    this.edituserForm = new FormGroup({
      userId : new FormControl("",[Validators.required,Validators.pattern('[0-9]')]),
      userMailId:new FormControl("", [Validators.required, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
      userFirstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
      userLastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      userPassword: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9@#$%&*]+')])
    })

    this.usr=new User();
  }
  UpdateuserDetails(data:any)
  {
//alert(data.userId+"\n"+data.userMailId+"\n"+data.userFirstName+"\n"+data.userLastName+"\n"+data.userPassword);

    this.usr.userId = data.userId;
    this.usr.userMailId =data.userMailId;
    this.usr.userFirstName = data.userFirstName
    this.usr.userLastName = data.userLastName;
    this.usr.userPassword = data.userPassword;
    this.result = this.user.updateDetails(this.usr);
    alert("Data Updated Successfully")

  }
}
