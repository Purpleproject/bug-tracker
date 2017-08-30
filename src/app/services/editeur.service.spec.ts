/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditeurService } from './editeur.service';

describe('EditeurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditeurService]
    });
  });

  it('should ...', inject([EditeurService], (service: EditeurService) => {
    expect(service).toBeTruthy();
  }));
});
