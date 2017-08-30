import {Testeur} from './testeur';
import {FicheBug} from './fiche-bug';


export class Test {
    constructor(id: Number, nomTest: String, description: String, 
        datePublication: Date, dateFin: Date, remuneration: String, 
        nbTesteurAttendu: Number, testeurs: Testeur[], statut: boolean, bugs: FicheBug[]) {

        this.id = id;
        this.nomTest= nomTest;
        this.description=description;
        this.datePublication= datePublication;
        this.dateFin=dateFin;
        this.remuneration=remuneration;
        this.nbTesteurAttendu=nbTesteurAttendu;
        this.testeurs=testeurs;
        this.statut=statut;
        this.bugs=bugs;

    }
    id: Number;
    nomTest: String; 
    description: String; 
    datePublication: Date;
    dateFin: Date;
    remuneration: String; 
    nbTesteurAttendu: Number;
     testeurs: Testeur[];
      statut: boolean;
       bugs: FicheBug[];
}
