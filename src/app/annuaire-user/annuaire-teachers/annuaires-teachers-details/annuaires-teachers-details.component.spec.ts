import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuairesTeachersDetailsComponent } from './annuaires-teachers-details.component';

describe('AnnuairesTeachersDetailsComponent', () => {
  let component: AnnuairesTeachersDetailsComponent;
  let fixture: ComponentFixture<AnnuairesTeachersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuairesTeachersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuairesTeachersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
