import {Testeur} from './testeur';

import { Test } from './test';

export class FicheBug {

    constructor(id: Number, libelle: String, description: String,
         statut: String,testeur:Testeur,test:Test) {

        this.id = id;
        this.libelle= libelle;
        this.description=description;
        this.statut=statut;
        this.testeur=testeur;
        this.test=test;

    }
    id: Number;
    libelle: String; 
    description: String; 
    statut: String;
    testeur: Testeur;
    test:Test;
}
