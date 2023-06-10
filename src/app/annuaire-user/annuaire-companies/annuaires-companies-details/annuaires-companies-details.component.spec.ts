import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuairesCompaniesDetailsComponent } from './annuaires-companies-details.component';

describe('AnnuairesCompaniesDetailsComponent', () => {
  let component: AnnuairesCompaniesDetailsComponent;
  let fixture: ComponentFixture<AnnuairesCompaniesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuairesCompaniesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuairesCompaniesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
