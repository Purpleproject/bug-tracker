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
  
    //Methode creer
    creerCand(candidature:Candidature) {
      console.log("abcdefg")
      let link="http://localhost:8080/BugTracker2/mvc/candidature/creerCand"
        return this.http.post(link, candidature).map(res => console.log("je marche"));
      }

    //Methode obtenirCandidatureParTesteur
    s(id:Number) {
      let link="http://localhost:8080/BugTracker2/mvc/candidature/rechercherCandTesteur?pId="+id;
      return this.http.get(link).map(res=> res.json());
    }
}
