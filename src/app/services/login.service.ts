import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import{ User } from '../entities/user'
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

 

  constructor(private http:Http) {

  }

  login(user:User) {
    let link="http://localhost:8080/BugTracker2/mvc/authentification/login";
    return this.http.post(link,user)
        .map(user => user.json());
      }

   logout() {
      // remove user from local storage to log user out
     localStorage.removeItem('user');
  }
}


