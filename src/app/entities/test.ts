import { Candidature } from './candidature';
import { FicheBug } from './fiche-bug';
import { Editeur } from './editeur'


export class Test {
    constructor(id: Number, nomTest: String, description: String,
        datePublication: Date, dateFin: Date, remuneration: String,
        nbTesteurAttendu: Number, statut: boolean, candidatures: Candidature[], bugs: FicheBug[], editeur: Editeur) {

        this.id = id;
        this.nomTest = nomTest;
        this.description = description;
        this.datePublication = datePublication;
        this.dateFin = dateFin;
        this.remuneration = remuneration;
        this.nbTesteurAttendu = nbTesteurAttendu;
        this.statut = statut;
        this.candidatures = candidatures;
        this.bugs = bugs;
        this.editeur = editeur;

    }
    id: Number;
    nomTest: String;
    description: String;
    datePublication: Date;
    dateFin: Date;
    remuneration: String;
    nbTesteurAttendu: Number;
    statut: boolean;
    candidatures: Candidature[];
    bugs: FicheBug[];
    editeur: Editeur;
}
