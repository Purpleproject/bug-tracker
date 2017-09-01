import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { FicheBug } from '../entities/fiche-bug';

@Injectable()
export class FicheBugService {

  constructor(private http:Http) { }

  //Methode Creer
  creerFicheBug (fichebug : FicheBug){
    let link="http://localhost:8080/BugTracker2/mvc/ficheBug/creerFicheBug"
    return this.http.post(link, fichebug).map(res => console.log("ok!"));
  }

}
