import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import sampleData from 'src/app/user/data.json';
@Injectable ({
    providedIn : "root"
})
export class UserService {
    jsonObj = JSON.parse(JSON.stringify(sampleData));
    constructor(private http : HttpClient ){
        console.log(Object.values(this.jsonObj));
    }
 
  getUsers() :any{}
 getAge():any {

 }

}