import { Component, OnInit } from '@angular/core';
import { TesteurService } from '../../services/testeur.service'
import { Testeur } from '../../entities/testeur'

@Component({
  selector: 'app-liste-testeurs',
  templateUrl: './liste-testeurs.component.html',
  styleUrls: ['./liste-testeurs.component.css']
})
export class ListeTesteursComponent implements OnInit {

  constructor(private testeurService : TesteurService ) { }

  ngOnInit() : void {
    this.testeurs = this.testeurService.obtenirTesteurs();

  }

  testeurs: Testeur[] = [];
}
