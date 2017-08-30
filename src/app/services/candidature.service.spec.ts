/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CandidatureService } from './candidature.service';

describe('CandidatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatureService]
    });
  });

  it('should ...', inject([CandidatureService], (service: CandidatureService) => {
    expect(service).toBeTruthy();
  }));
});
