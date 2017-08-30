export class Utilisateur {
    constructor(id: Number, nomUtilisateur: String, mail: String, mdp: String, date: Date) {
        
                    this.id = id;
                    this.nomUtilisateur = nomUtilisateur;
                    this.mail = mail;
                    this.mdp = mdp;
                    this.date = date;
              }
              
        id: Number;
        nomUtilisateur: String;
        mail: String;
        mdp: String;
        date: Date;
  
        toString(): String {
              return (this.nomUtilisateur+" "+ this.mail+" "+ this.mdp+" "+ this.date);
        }
}
