import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEnseignantComponent } from './inscription-enseignant.component';

describe('InscriptionEnseignantComponent', () => {
  let component: InscriptionEnseignantComponent;
  let fixture: ComponentFixture<InscriptionEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
