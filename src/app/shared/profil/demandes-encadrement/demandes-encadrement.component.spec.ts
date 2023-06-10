import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesEncadrementComponent } from './demandes-encadrement.component';

describe('DemandesEncadrementComponent', () => {
  let component: DemandesEncadrementComponent;
  let fixture: ComponentFixture<DemandesEncadrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesEncadrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesEncadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
