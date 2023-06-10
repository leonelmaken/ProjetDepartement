import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireRecommandationTeachersComponent } from './annuaire-recommandation-teachers.component';

describe('AnnuaireRecommandationTeachersComponent', () => {
  let component: AnnuaireRecommandationTeachersComponent;
  let fixture: ComponentFixture<AnnuaireRecommandationTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuaireRecommandationTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuaireRecommandationTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
