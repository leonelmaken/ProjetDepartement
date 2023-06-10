import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjoutOffresEntrepriseComponent } from './formulaire-ajout-offres-entreprise.component';

describe('FormulaireAjoutOffresEntrepriseComponent', () => {
  let component: FormulaireAjoutOffresEntrepriseComponent;
  let fixture: ComponentFixture<FormulaireAjoutOffresEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAjoutOffresEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireAjoutOffresEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
