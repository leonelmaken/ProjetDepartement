import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfffreAppComponent } from './offfre-app.component';

describe('OfffreAppComponent', () => {
  let component: OfffreAppComponent;
  let fixture: ComponentFixture<OfffreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfffreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfffreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
