import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmploiComponent } from './liste-emploi.component';

describe('ListeEmploiComponent', () => {
  let component: ListeEmploiComponent;
  let fixture: ComponentFixture<ListeEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
