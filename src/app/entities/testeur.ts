import {Test} from './test';
import {FicheBug} from './fiche-bug';
import {Utilisateur} from './utilisateur';

export class Testeur extends Utilisateur{
    constructor (id: Number, nomUtilisateur: String, mail: String, mdp: String, date: Date, nom: String, prenom: String, competence: String, test: Test, bugs: [FicheBug]) {
                  super(id, nomUtilisateur,mail, mdp, date);
                    this.nom = nom;
                    this.prenom = prenom;
                    this.competence = competence;
                    this.test = test;
                    this.bugs = bugs;
              }

              nom: String;
              prenom: String;
              competence: String;
              test: Test ;
              bugs: [FicheBug];
        
              toString(): String {
                    return (this.nom+" "+ this.prenom+" "+ this.competence+" "+ this.test+" "+ this.bugs);
              }
}
