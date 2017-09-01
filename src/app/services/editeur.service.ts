import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Editeur } from '../entities/editeur';

@Injectable()
export class EditeurService {

  constructor(private http:Http) { }

//Methode obtenirEditeurs
obtenirEditeurs() {
  let link="http://localhost:8080/BugTracker2/mvc/user/listeEditeurs"
  return this.http.get(link).map(res=> res.json());
}

//Methode creerEditeurs
creerEditeur(editeur : Editeur) {
  let link="http://localhost:8080/BugTracker2/mvc/user/creerEditeur"
    return this.http.post(link, editeur)
           .map(res => console.log("okkkkk !"));;
  }  

//Methode obtenirTous
obtenirEditeurId(id:Number) {
  let link="http://localhost:8080/BugTracker2/mvc/user/EditeurId?pId="+id;
  return this.http.get(link).map(res=> res.json());
}

}
