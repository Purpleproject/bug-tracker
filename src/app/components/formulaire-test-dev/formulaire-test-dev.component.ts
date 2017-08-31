import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-test-dev',
  templateUrl: './formulaire-test-dev.component.html',
  styleUrls: ['./formulaire-test-dev.component.css']
})
export class FormulaireTestDevComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormulaireTestDevComponent } from './formulaire-test-dev.component';

describe('FormulaireTesteurComponent', () => {
  let component: FormulaireTestDevComponent;
  let fixture: ComponentFixture<FormulaireTestDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireTestDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireTestDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/