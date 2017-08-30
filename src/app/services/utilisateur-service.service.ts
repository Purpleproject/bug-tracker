import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Utilisateur } from '../entities/utilisateur';

@Injectable()
export class UtilisateurServiceService {

  constructor(private http:Http) { }

  obtenirUtilisateurs() {
    let link="http://localhost:8080/BugTracker2/mvc/user/rechercherTout"
    return this.http.get(link).map(res=> res.json());
  }

}
