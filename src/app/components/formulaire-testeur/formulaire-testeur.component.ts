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

  private testeur : Testeur = new Testeur(0,"","","", new Date(2000,12,12), "","");

  
  constructor(private testeurService : TesteurService) { }
  onSubmit(): void {
    
    //console.log(this.testeur.nomUtilisateur);

    // appel au service :
    this.testeurService.creerTesteur(this.testeur)
                .subscribe(res => {console.log("appel envoyé : "+res);})

    console.log("plop"+this.testeur.nomUtilisateur);
  }

  ngOnInit() {
  }

  }
