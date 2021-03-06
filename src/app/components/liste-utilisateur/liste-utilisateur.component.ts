import { Component, OnInit } from '@angular/core';
import { UtilisateurServiceService } from '../../services/utilisateur-service.service';
import { Utilisateur } from '../../entities/utilisateur';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateursComponent implements OnInit {

  constructor(private utilisateurServiceService : UtilisateurServiceService ) { }

  ngOnInit() : void {

    this.utilisateurServiceService.obtenirUtilisateurs().subscribe(utilisateurs=>this.utilisateurs=utilisateurs);

  }

  utilisateurs: Utilisateur[] = [];
}
