import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { User } from '../model/User';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-resigter',
  templateUrl: './resigter.component.html',
  styleUrls: ['./resigter.component.css']
})
export class ResigterComponent {

  registerform:FormGroup;
  usr:User;
  result:String="";

  constructor(private user:UserService)
  {
    this.registerform = new FormGroup({
      userMailId:new FormControl("", [Validators.required, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
      userFirstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
      userLastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      userPassword: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9@#$%&*]'),Validators.maxLength(20),Validators.minLength(14)])
    })

    this.usr=new User();
  }

 
  registerDetails(data:any)
  {
    this.usr.userMailId =data.userMailId;
    this.usr.userFirstName = data.userFirstName
    this.usr.userLastName = data.userLastName;
    this.usr.userPassword = data.userPassword;
      this.result = this.user.insertDetails(this.usr);
      alert("Register Successfully")
  

  }

}
