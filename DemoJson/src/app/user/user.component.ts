import { Component, OnInit } from '@angular/core';
import sampleData from './data.json';
import { UserService } from 'src/app/services/user.service'
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Users:any = sampleData; 
  Utilisateurs : Array<any>=[];
  name : String ='';

  constructor( private userService :UserService, private route: ActivatedRoute ,private router : Router) { }

  ngOnInit(): void {
    
    //this.Utilisateurs=this.userService.getUsers();
  
    this.Utilisateurs = <any[]>this.Users;
    console.log(this.Utilisateurs);
  }


addsvg(age:number) : any {
  if(age > 60) { return "\expert.svg";

  } else if(age<=40 || age <=60  ) {return  "\advance.svg";} 
  else {
    return "\rookie.svg";
  }
}
}