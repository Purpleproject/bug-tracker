import { Testeur } from './testeur';
import { Test } from './test';


export class Candidature {
    constructor(id: Number, note: Number, lettreMotivation: String, commentaireNote: String, statut: boolean, testeur: Testeur, test: Test) {

        this.id = id;
        this.note = note;
        this.lettreMotivation;
        this.commentaireNote = commentaireNote;
        this.statut = statut;
        this.testeur = testeur;
        this.test = test;

    }
    id: Number;
    note: Number;
    lettreMotivation: String;
    commentaireNote: String;
    statut: boolean;
    testeur: Testeur;
    test: Test;
}
