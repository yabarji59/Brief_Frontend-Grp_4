import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/internal/operators/map';
import { Result, User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlJson='assets/JSON_Data_User.json';
  constructor(private http: HttpClient) { }

// récupérer les données du fichier json//

  getUsers():Observable<Result>{
    return this.http.get<Result>(this.urlJson);
  }
}
