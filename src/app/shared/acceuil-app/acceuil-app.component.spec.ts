import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilAppComponent } from './acceuil-app.component';

describe('AcceuilAppComponent', () => {
  let component: AcceuilAppComponent;
  let fixture: ComponentFixture<AcceuilAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
