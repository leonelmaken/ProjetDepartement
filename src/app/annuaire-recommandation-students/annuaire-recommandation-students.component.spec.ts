import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireRecommandationStudentsComponent } from './annuaire-recommandation-students.component';

describe('AnnuaireRecommandationStudentsComponent', () => {
  let component: AnnuaireRecommandationStudentsComponent;
  let fixture: ComponentFixture<AnnuaireRecommandationStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuaireRecommandationStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuaireRecommandationStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
