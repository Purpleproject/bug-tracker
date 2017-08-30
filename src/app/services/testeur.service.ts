import { Injectable } from '@angular/core';
import { Testeur } from '../entities/testeur';
import {TESTEURS} from './mock-testeur.service';

@Injectable()
export class TesteurService {

  constructor() { }
  //Methode obtenirTous
  obtenirTesteurs(): Testeur[] {
    return TESTEURS;
  }

}
