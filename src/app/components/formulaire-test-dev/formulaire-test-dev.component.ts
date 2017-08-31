import { Component, OnInit } from '@angular/core';
import { Test } from '../../entities/test';
import { TestService } from '../../services/test.service';

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

  private test : Test = new Test(0, "","", undefined, undefined, "", 0,false, null, null);
 
  constructor(private TestService : TestService) { }
 
  onSubmit(): void {

    console.log(this.test.nomTest);
    //appel du service :
    this.TestService.creerTest(this.test);
    console.log(this.test.nomTest)

  }


  ngOnInit() {
  }

}



