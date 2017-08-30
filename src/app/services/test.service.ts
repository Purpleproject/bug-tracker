import { Injectable } from '@angular/core';
import {Test} from '../entities/test';

//Créer un parent qui a les méthodes crud ?


@Injectable()
export class TestService {

  constructor() { }

  //Methode obtenirTous
  obtenirTests(): Test [] {
    return undefined;
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

  //Methode Creer
creerTest () : Test {
  //obtenir les données du formulaire
  return Test;
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
