import { Test } from './test';
import { Utilisateur } from './utilisateur';

export class Editeur extends Utilisateur {
      constructor(id: Number, nomUtilisateur: String, mail: String, mdp: String, date: Date) {
            super(id, nomUtilisateur, mail, mdp, date);
      }
}
