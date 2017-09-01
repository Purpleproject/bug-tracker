import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Candidature } from '../../entities/candidature';
import { CandidatureService } from '../../services/candidature.service';
import { TesteurService } from '../../services/testeur.service';
import { TestService } from '../../services/test.service';
import { Testeur } from '../../entities/testeur';
import { Test } from '../../entities/test';

@Component({
  selector: 'app-formulaire-candidater',
  templateUrl: './formulaire-candidater.component.html',
  styleUrls: ['./formulaire-candidater.component.css'],
  styles: [`
  .ng-valid { border-color: green; }
  .ng-invalid { border-color: red; } `
  ]
})

export class FormulaireCandidaterComponent implements OnInit {

  private candidature: Candidature = new Candidature(0, 0, "", "", false, undefined, undefined);

  idTesteur: Number;
  idTest: Number;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private candidatureService: CandidatureService,
    private testeurService : TesteurService,
    private testService : TestService,
  ) { }

  onSubmit(): void {
    console.log("onsubmit ok ");
    this.candidature.note=0;
    this.candidature.commentaireNote="";
    this.candidature.statut=false;
    this.testService.obtenirTestId(this.idTest).subscribe(test => this.candidature.test = test);
    this.testeurService.obtenirTesteurId(this.idTesteur).subscribe(testeur => this.candidature.testeur = testeur );
    this.candidatureService.creerCand(this.candidature).subscribe(res => { console.log("appel envoyé : " + res); })
    console.log("onsubmit ok ");
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.idTesteur = +params['idU']; });
    this.route.params.subscribe(params => { this.idTest = +params['idT']; });
  }
}
