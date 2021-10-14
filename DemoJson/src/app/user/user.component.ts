import { Component, OnInit } from '@angular/core';
import sampleData from './data.json';
import { UserService } from 'src/app/services/user.service'
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Users:any = sampleData; 
  Utilisateurs : Array<any>=[];
 

  constructor( private userService :UserService, private router : Router) { }

  ngOnInit(): void {
    
    this.Utilisateurs=this.userService.getUsers();
   
   
  }


addsvg(age:number) : any {
  if(age > 60) { return "\expert.svg";

  } else if(age<=40 || age <=60  ) {return  "\advance.svg";} 
  else {
    return "\rookie.svg";
  }
}

affichedetail():void {
  console.log("afficher page")
  this.router.navigate(['/userdetails']); 
  
}
}