/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockTesteurService } from './mock-testeur.service';

describe('MockTesteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockTesteurService]
    });
  });

  it('should ...', inject([MockTesteurService], (service: MockTesteurService) => {
    expect(service).toBeTruthy();
  }));
});
