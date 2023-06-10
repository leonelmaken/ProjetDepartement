import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireOffresEntrepriseComponent } from './annuaire-offres-entreprise.component';

describe('AnnuaireOffresEntrepriseComponent', () => {
  let component: AnnuaireOffresEntrepriseComponent;
  let fixture: ComponentFixture<AnnuaireOffresEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuaireOffresEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuaireOffresEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
