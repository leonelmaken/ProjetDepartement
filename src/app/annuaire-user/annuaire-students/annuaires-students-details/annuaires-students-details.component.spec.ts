import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuairesStudentsDetailsComponent } from './annuaires-students-details.component';

describe('AnnuairesStudentsDetailsComponent', () => {
  let component: AnnuairesStudentsDetailsComponent;
  let fixture: ComponentFixture<AnnuairesStudentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuairesStudentsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuairesStudentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
