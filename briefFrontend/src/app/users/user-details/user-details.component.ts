import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/model/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((user) =>{
      this.user = user;
      console.log(this.user)
    });
  }

}
