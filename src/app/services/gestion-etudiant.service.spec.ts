import { TestBed } from '@angular/core/testing';

import { GestionEtudiantService } from './gestion-etudiant.service';

describe('GestionEtudiantService', () => {
  let service: GestionEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
