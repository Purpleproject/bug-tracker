import {Test} from './test';
import {FicheBug} from './fiche-bug';
import {Utilisateur} from './utilisateur';

export class Testeur extends Utilisateur{

    constructor (id: Number, nomUtilisateur: String, mail: String, mdp: String, date: Date, nom: String, prenom: String) {
                  super(id, nomUtilisateur,mail, mdp, date);
                    this.nom = nom;
                    this.prenom = prenom;
              }

              nom: String;
              prenom: String;
        
              toString(): String {
                    return (this.nom+" "+ this.prenom);
              }
}
