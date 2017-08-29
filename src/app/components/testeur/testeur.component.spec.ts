/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TesteurComponent } from './testeur.component';

describe('TesteurComponent', () => {
  let component: TesteurComponent;
  let fixture: ComponentFixture<TesteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
