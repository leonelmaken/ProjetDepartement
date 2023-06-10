import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireOffresEntrepriseSouscriptionComponent } from './annuaire-offres-entreprise-souscription.component';

describe('AnnuaireOffresEntrepriseSouscriptionComponent', () => {
  let component: AnnuaireOffresEntrepriseSouscriptionComponent;
  let fixture: ComponentFixture<AnnuaireOffresEntrepriseSouscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuaireOffresEntrepriseSouscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuaireOffresEntrepriseSouscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
