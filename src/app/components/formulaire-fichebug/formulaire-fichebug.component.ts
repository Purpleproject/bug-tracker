import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FicheBug } from '../../entities/fiche-bug';
import { FicheBugService } from '../../services/fiche-bug.service';
import { Test } from '../../entities/test';
import { Testeur } from '../../entities/testeur';

@Component({
  selector: 'app-formulaire-fichebug',
  templateUrl: './formulaire-fichebug.component.html',
  styleUrls: ['./formulaire-fichebug.component.css'],
  styles: [`
  .ng-valid { border-color: green; }
  .ng-invalid { border-color: red; } `

  ]
})
export class FormulaireFichebugComponent implements OnInit {

  private ficheBug : FicheBug = new FicheBug(0, "","", "Non Traité", null, null);

  idTesteur: Number;
  idTest: Number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ficheBugService : FicheBugService
  ) { }

  onSubmit(): void {
    
        console.log(this.ficheBug.libelle);
        //appel du service :
        this.ficheBugService.creerFicheBug(this.ficheBug)
          .subscribe(res => {console.log("appel envoyé : "+res);});
        console.log(this.ficheBug.libelle)
    
      }

  ngOnInit() {
   // this.route.params.subscribe(params => { this.idTesteur = +params['idU']; });
    this.route.params.subscribe(params => { this.idTest = +params['idT']; });
  }

}
