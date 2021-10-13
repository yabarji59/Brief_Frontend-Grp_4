import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iusers } from "../users";

import 'rxjs/add/operator/map';

@Injectable ({
    providedIn : "root"
})
export class UserService {

    private _url: string = "/assets/data/Users.json";
   
    constructor(private http : HttpClient ){

    }
 
 
    getUsers() : Observable<Iusers[]> {
     return this.http.get<Iusers[]>(this._url);
 }

    getData() :any {
   return this.http.get<any>(this._url)
     .map((response:Response)=>response.json())
 }
   

}