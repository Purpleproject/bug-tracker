import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import{ User } from '../entities/user'
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

 

  constructor(private http:Http) {

  }

  login(mail: String, mdp: String) {
    let link="http://localhost:8080/BugTracker2/mvc/authentification/login";
    return this.http.post(link, 'mail=' + mail + '&mdp=' + mdp)
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
      }

   logout() {
      // remove user from local storage to log user out
     localStorage.removeItem('user');
  }
}


