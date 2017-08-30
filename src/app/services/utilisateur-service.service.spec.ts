/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UtilisateurServiceService } from './utilisateur-service.service';

describe('UtilisateurServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilisateurServiceService]
    });
  });

  it('should ...', inject([UtilisateurServiceService], (service: UtilisateurServiceService) => {
    expect(service).toBeTruthy();
  }));
});
