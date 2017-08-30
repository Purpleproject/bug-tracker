import { Component, OnInit } from '@angular/core';
import { Testeur } from '../../entities/testeur';
import { TesteurService } from '../../services/testeur.service';

@Component({
  selector: 'app-formulaire-testeur',
  templateUrl: './formulaire-testeur.component.html',
  styleUrls: ['./formulaire-testeur.component.css'],
  styles: [`
  .ng-valid { border-color: green; }
  .ng-invalid { border-color: red; } `

  ]
})
export class FormulaireTesteurComponent implements OnInit {

  private testeur : Testeur = new Testeur(0,"","","",undefined, "","");

  
  constructor(private testeurService : TesteurService) { }
  onSubmit(): void {
    
    console.log(this.testeur.nomUtilisateur);

    // appel au service :
    this.testeurService.creerTesteurs(this.testeur);

    console.log("plop"+this.testeur.nomUtilisateur);
  }

  ngOnInit() {
  }

  }
