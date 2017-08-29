/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreerTesteurService } from './creer-testeur.service';

describe('CreerTesteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreerTesteurService]
    });
  });

  it('should ...', inject([CreerTesteurService], (service: CreerTesteurService) => {
    expect(service).toBeTruthy();
  }));
});
