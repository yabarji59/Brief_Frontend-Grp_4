import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
 public utilisateurs = [] as  any;
 dataObject :any={};
  constructor(private userService :UserService ) { 
    
    
  }

  ngOnInit(): void {
   
    this.userService.getUsers().subscribe(
      (response: any) => {
        console.log(response);
        this.utilisateurs = response.data; // add .data here.
      },
      () => console.log('error')
    );
    
    
    this.utilisateurs =this.userService.getData()
    .subscribe( (resData: any) => this.dataObject = resData)
    console.log(this.dataObject);
  }
 


}
