import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/model/User';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  list: User[];      // déclaration de la liste user//
  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data =>{       
      console.log(data.results);
      this.list= data.results;
    })
  }
  toDetails(user){
    this.router.navigate(['../UserDetails'],{queryParams:user});
  }
}
