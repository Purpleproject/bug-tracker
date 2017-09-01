import { Component, OnInit } from '@angular/core';


import { TestService } from '../../services/test.service';
import { Test } from '../../entities/test';
import { Candidature } from '../../entities/candidature';
import { CandidatureService } from '../../services/candidature.service'

@Component({
  selector: 'app-liste-test-par-id',
  templateUrl: './liste-test-par-id.component.html',
  styleUrls: ['./liste-test-par-id.component.css']
})
export class ListeTestParIdComponent implements OnInit {

  constructor(private testService : TestService,
  private candidatureService : CandidatureService,
  ) { }

  candidatures:Candidature[];
  candidature:Candidature;

  ngOnInit() : void {
    
    this.candidatureService.obtenirCandidatureParTesteur(this.candidature).subscribe(tests=>this.tests=tests);
    
    
  }
  /** */
  tests: Test[] = [];
  idTest : Number; */
}

}