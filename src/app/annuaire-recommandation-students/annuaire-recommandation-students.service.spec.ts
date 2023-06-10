import { TestBed } from '@angular/core/testing';

import { AnnuaireRecommandationStudentsService } from './annuaire-recommandation-students.service';

describe('AnnuaireRecommandationStudentsService', () => {
  let service: AnnuaireRecommandationStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnuaireRecommandationStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
