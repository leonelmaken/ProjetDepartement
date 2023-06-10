import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireStudentsComponent } from './annuaire-students.component';

describe('AnnuaireStudentsComponent', () => {
  let component: AnnuaireStudentsComponent;
  let fixture: ComponentFixture<AnnuaireStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuaireStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuaireStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
