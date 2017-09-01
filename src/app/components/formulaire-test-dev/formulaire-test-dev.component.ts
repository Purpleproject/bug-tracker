import { Component, OnInit } from '@angular/core';
import { Test } from '../../entities/test';
import { TestService } from '../../services/test.service';
import { EditeurService } from '../../services/editeur.service';
import { Editeur } from '../../entities/editeur';

@Component({
  selector: 'app-formulaire-test-dev',
  templateUrl: './formulaire-test-dev.component.html',
  styleUrls: ['./formulaire-test-dev.component.css'],
  styles: [`
  .ng-valid { border-color: green; }
  .ng-invalid { border-color: red; } `

  ]
})
export class FormulaireTestDevComponent implements OnInit {

  private test: Test = new Test(0, "", "", undefined, undefined, "", 0, undefined, null, null, undefined);

  idEditeur: Number;

  constructor(private testService: TestService,
    private editeurService : EditeurService) { }

  onSubmit(): void {
    console.log(this.test.nomTest);
    this.editeurService.obtenirEditeurId(this.idEditeur).subscribe(editeur => this.test.editeur = editeur);
    //appel du service :
    this.testService.creerTest(this.test).subscribe(res => { console.log("appel envoyé : " + res); });
    console.log(this.test.nomTest)

  }


  ngOnInit() {
  }

}



