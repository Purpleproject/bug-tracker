/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TesteurService } from './testeur.service';

describe('TesteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesteurService]
    });
  });

  it('should ...', inject([TesteurService], (service: TesteurService) => {
    expect(service).toBeTruthy();
  }));
});
