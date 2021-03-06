import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Testeur } from '../entities/testeur';


@Injectable()
export class TesteurService {

  constructor(private http:Http) { }
  //Methode obtenirTous
  obtenirTesteurs() {
    let link="http://localhost:8080/BugTracker2/mvc/user/listeTesteurs"
    return this.http.get(link).map(res=> res.json());
  }

  //Methode creerTesteurs
  creerTesteur(testeur : Testeur) {
    let link="http://localhost:8080/BugTracker2/mvc/user/creerTesteur"
      return this.http.post(link, testeur)
                      .map(res => console.log("okkkkk !"));
    }

    //Methode obtenirTous
  obtenirTesteurId(id:Number) {
    let link="http://localhost:8080/BugTracker2/mvc/user/testeurId?pId="+id;
    return this.http.get(link).map(res=> res.json());
  }
}
