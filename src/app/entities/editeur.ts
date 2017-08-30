import { Test } from './test';
import { Utilisateur } from './utilisateur';

export class Editeur extends Utilisateur {
      tests
      constructor(id: Number, nomUtilisateur: String, mail: String, mdp: String, date: Date, tests: [Test]) {
            super(id, nomUtilisateur, mail, mdp, date);
            this.tests = tests;
      }

      
      tests: [Test];


      toString(): String {
            return (this.tests);
      }
}
}
