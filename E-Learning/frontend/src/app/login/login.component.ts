import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform: FormGroup;
  usr: User;

  constructor(private loginservice: LoginService, private router: Router) {
    this.loginform = new FormGroup({

      userMailId: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@gmail.com')]),
      userPassword: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')])
    })
    this.usr = new User();
  }

  login(data: any) {
    this.usr.userMailId = data.userMailId;
    this.usr.userPassword = data.userPassword;
    // alert(data.userMailId + " " + data.userPassword);
    this.loginservice.login(this.usr).subscribe(
      (resultdata: any) => {
        console.log(resultdata)
        if (resultdata.msg == "Admin Success") {
          this.router.navigate(['/AdminHome']);
        }
        else if (resultdata.msg == "User Success") {
          this.router.navigate(['/UserHome']);
        }
        else {
          alert("Invalid User");
        }
      }
    );



  }

}
