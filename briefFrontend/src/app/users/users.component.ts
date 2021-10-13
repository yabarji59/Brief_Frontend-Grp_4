import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/User';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
list: User[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data =>{
      console.log(data.results);
      this.list= data.results;
    })
  }

}
