import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent {
  deleteuserForm: FormGroup;
  usr: User;
  result: String = "";

  constructor(private user: UserService) {
    this.deleteuserForm = new FormGroup({
      userId: new FormControl("", [Validators.required, Validators.pattern('[0-9]')]),
    })

    this.usr = new User();
  }
  DeleteuserDetails(data: any) {
    this.usr.userId = data.userId;
    this.result = this.user.deleteDetails(this.usr);
    alert("User Deleted Successfully")
  }
}
