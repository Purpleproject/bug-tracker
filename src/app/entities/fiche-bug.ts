import {Testeur} from './testeur';


export class FicheBug {

    constructor(id: Number, libelle: String, description: String,
         statut: boolean) {

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
