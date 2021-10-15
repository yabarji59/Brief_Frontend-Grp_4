import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import sampleData from 'src/app/user/data.json';
import 'rxjs/Rx';
@Injectable ({
    providedIn : "root"
})
export class UserService {
    users :any;
    jsonObj = JSON.parse(JSON.stringify(sampleData));
    constructor(private http : HttpClient ){
        console.log(Object.values(this.jsonObj));
    }
 
  getUsers() :any{ 
      }
  getUsersbyid(id:String) :any{}

  
}

