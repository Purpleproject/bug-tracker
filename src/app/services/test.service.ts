import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Test} from '../entities/test';

@Injectable()
export class TestService {

  constructor(private http:Http) { }
//Methode obtenirTous
obtenirTests() {
  let link="http://localhost:8080/BugTracker2/mvc/test/rechercherTout"
  return this.http.get(link).map(res=> res.json());
}

 //Methode Creer
 creerTest (test : Test) {
  let link="http://localhost:8080/BugTracker2/mvc/test/creerTest"
  return this.http.post(link, test).map(res => console.log("okkkkk !"));
}

//Methode obtenirTous
obtenirTestId(id:Number) {
  let link="http://localhost:8080/BugTracker2/mvc/test/testId?pId="+id;
  return this.http.get(link).map(res=> res.json());
}


}
