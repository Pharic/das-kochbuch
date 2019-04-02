import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptDetailseiteComponent } from './rezept-detailseite.component';

describe('RezeptDetailseiteComponent', () => {
  let component: RezeptDetailseiteComponent;
  let fixture: ComponentFixture<RezeptDetailseiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezeptDetailseiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptDetailseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
