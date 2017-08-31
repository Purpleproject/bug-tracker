import {Testeur} from './testeur';
import {FicheBug} from './fiche-bug';

export class FicheBug {

    constructor(id: Number, libelle: String, description: String,
         statut: String) {

        this.id = id;
        this.libelle= libelle;
        this.description=description;
        this.statut=statut;

    }
    id: Number;
    libelle: String; 
    description: String; 
    statut: boolean; 
}
