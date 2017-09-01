import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TestService } from '../../services/test.service';
import { Test } from '../../entities/test';

@Component({
  selector: 'app-liste-test',
  templateUrl: './liste-test.component.html',
  styleUrls: ['./liste-test.component.css']
})
export class ListeTestComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private testService : TestService ) { }

  ngOnInit() : void {
    this.testService.obtenirTests().subscribe(tests=>this.tests=tests);
  }
  tests: Test[] = [];
}
