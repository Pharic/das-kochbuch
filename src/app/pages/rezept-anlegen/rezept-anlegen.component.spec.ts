import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptAnlegenComponent } from './rezept-anlegen.component';

describe('RezeptAnlegenComponent', () => {
  let component: RezeptAnlegenComponent;
  let fixture: ComponentFixture<RezeptAnlegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezeptAnlegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
