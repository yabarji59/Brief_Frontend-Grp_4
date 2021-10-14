import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user :any;
 id : String ='';
  constructor(private router: ActivatedRoute,private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params["uuid"];
  console.log(this.id);
  this.router.queryParams.subscribe((user) =>{
   
  console.log(this.user)
   
  });}

}