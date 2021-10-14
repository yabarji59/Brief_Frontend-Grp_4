import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Result, User } from '../model/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private urlJson='assets/JSON_Data_User.json'; // peut etre remplacer par les API //
  communUser: User;                            // décraler la variable communUser//
  constructor(private http: HttpClient) { }
  


// récupérer les données du fichier json//

  getUsers():Observable<Result>{
    return this.http.get<Result>(this.urlJson);
  }
  saveUser(user: User) {
    this.communUser= user;
  }
  getUser(): User {
    return this.communUser;
  }
}
