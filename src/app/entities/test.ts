import {Testeur} from './testeur';
import {FicheBug} from './fiche-bug';


export class Test {
    constructor(id: Number, nomTest: String, description: String, 
        datePublication: Date, dateFin: Date, remuneration: String, 
        nbTesteurAttendu: Number, statut: boolean, testeurs: Testeur[],  bugs: FicheBug[]) {

        this.id = id;
        this.nomTest= nomTest;
        this.description=description;
        this.datePublication= datePublication;
        this.dateFin=dateFin;
        this.remuneration=remuneration;
        this.nbTesteurAttendu=nbTesteurAttendu;
        this.statut=statut;
        this.testeurs=testeurs;
        this.bugs=bugs;

    }
    id: Number;
    nomTest: String; 
    description: String; 
    datePublication: Date;
    dateFin: Date;
    remuneration: String; 
    nbTesteurAttendu: Number;
    statut: boolean;
     testeurs: Testeur[];
     bugs: FicheBug[];
}
