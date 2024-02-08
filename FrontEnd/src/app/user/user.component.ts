import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  result:String="";
  cus: User;
  userList: User[] = [];
  constructor(private us: UserService) {
    this.GetAllDetails();
    this.cus = new User();

  }

  GetAllDetails() {
    this.us.getAllDetails().subscribe(userVal => this.userList = userVal);
  }
}
