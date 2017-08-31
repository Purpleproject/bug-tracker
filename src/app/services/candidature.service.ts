import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Candidature } from '../entities/candidature';

@Injectable()
export class CandidatureService {

  constructor(private http:Http) { }

    //Methode obtenirTous
    obtenirCandidatures() {
      let link="http://localhost:8080/BugTracker2/mvc/candidature/rechercherTout"
      return this.http.get(link).map(res=> res.json());
    }
  
    //Methode creerTesteurs
    creerCand(Candidature) {
      let link="http://localhost:8080/BugTracker2/mvc/candidature/creerCand"
        return this.http.post(link, Candidature).map(res => console.log("je marche"));
      }
}
