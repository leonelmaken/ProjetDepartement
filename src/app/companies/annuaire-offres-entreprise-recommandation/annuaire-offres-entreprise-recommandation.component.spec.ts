import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireOffresEntrepriseRecommandationComponent } from './annuaire-offres-entreprise-recommandation.component';

describe('AnnuaireOffresEntrepriseRecommandationComponent', () => {
  let component: AnnuaireOffresEntrepriseRecommandationComponent;
  let fixture: ComponentFixture<AnnuaireOffresEntrepriseRecommandationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuaireOffresEntrepriseRecommandationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuaireOffresEntrepriseRecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
