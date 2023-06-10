import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuDetailsComponent } from './actu-details.component';

describe('ActuDetailsComponent', () => {
  let component: ActuDetailsComponent;
  let fixture: ComponentFixture<ActuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
