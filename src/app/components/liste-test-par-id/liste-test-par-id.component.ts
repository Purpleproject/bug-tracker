import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Test } from '../../entities/test';

@Component({
  selector: 'app-liste-test-par-id',
  templateUrl: './liste-test-par-id.component.html',
  styleUrls: ['./liste-test-par-id.component.css']
})
export class ListeTestParIdComponent implements OnInit {

  constructor(private testService : TestService) { }

  
  ngOnInit() : void {
    this.testService.obtenirTestId(this.idTest).subscribe(tests=>this.tests=tests);
  }
  tests: Test[] = [];
  idTest : Number;
}

