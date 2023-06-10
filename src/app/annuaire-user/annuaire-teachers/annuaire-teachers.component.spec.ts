import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireTeachersComponent } from './annuaire-teachers.component';

describe('AnnuaireTeachersComponent', () => {
  let component: AnnuaireTeachersComponent;
  let fixture: ComponentFixture<AnnuaireTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuaireTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuaireTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
