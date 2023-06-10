import { TestBed } from '@angular/core/testing';

import { AnnuaireRecommandationsTeachersService } from './annuaire-recommandations-teachers.service';

describe('AnnuaireRecommandationsTeachersService', () => {
  let service: AnnuaireRecommandationsTeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnuaireRecommandationsTeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
