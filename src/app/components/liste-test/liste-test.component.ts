import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Test } from '../../entities/test';

@Component({
  selector: 'app-liste-test',
  templateUrl: './liste-test.component.html',
  styleUrls: ['./liste-test.component.css']
})
export class ListeTestComponent implements OnInit {

  constructor(private testService : TestService ) { }

  ngOnInit() {
    this.testService.obtenirTests().subscribe(tests=>this.tests=tests);
  }
  tests: Test[] = [];
}
