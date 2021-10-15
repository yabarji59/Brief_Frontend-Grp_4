import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import sampleData from '../user/data.json';
import {User } from '../entite/user'
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user: any ;
  utilisateurs: User[] = [];
Users:any = sampleData; 
 uuid : any ;

  constructor(private route: ActivatedRoute,private userService: UserService) {
    
   
   }

  ngOnInit(): void {
   
  //  this.id = this.router.snapshot.params["uuid"];
 // console.log(this.id);
 this.utilisateurs = <any[]>this.Users;
 console.log(this.utilisateurs);
 this.uuid = this.route.snapshot.paramMap.get('uuid');
    this.user = this.utilisateurs.find(
      (user) => user.login.uuid == this.uuid
    );
    console.log(this.user);
  }

  addsvg(age:number) : any {
    if(age > 60) { return "\expert.svg";
  
    } else if(age<=40 || age <=60  ) {return  "\advance.svg";} 
    else {
      return "\rookie.svg";
    }
  }
}