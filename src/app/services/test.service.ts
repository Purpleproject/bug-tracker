import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Test} from '../entities/test';

@Injectable()
export class TestService {

  constructor(private http:Http) { }
//Methode obtenirTous
obtenirTests() {
  let link="http://localhost:8080/BugTracker2/mvc/user/listeTests"
  return this.http.get(link).map(res=> res.json());
}

 //Methode Creer
 creerTest (Test) {
  let link="http://localhost:8080/BugTracker2/mvc/test/creerTest"
  return this.http.post(link, Test);
}
/*
  //obtenirParId
  obtenirParId(idTest : Number): Test {
    for (let test of undefined) {
        if (test.id == idTest) {
            return test;
        } else{
            return undefined;
        }
      }
    }

 
  //Methode Supprimer
supprimerTest(): void {
  //Obtenir les données de la ligne/formulaire
}
  //Methode Modifier
modifierTest(): void {
  //Obtenir les données du formulaire
}
  */
}
