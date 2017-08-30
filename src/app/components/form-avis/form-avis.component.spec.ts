/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormAvisComponent } from './form-avis.component';

describe('FormAvisComponent', () => {
  let component: FormAvisComponent;
  let fixture: ComponentFixture<FormAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
