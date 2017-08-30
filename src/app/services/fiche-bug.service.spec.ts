/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FicheBugService } from './fiche-bug.service';

describe('FicheBugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FicheBugService]
    });
  });

  it('should ...', inject([FicheBugService], (service: FicheBugService) => {
    expect(service).toBeTruthy();
  }));
});
