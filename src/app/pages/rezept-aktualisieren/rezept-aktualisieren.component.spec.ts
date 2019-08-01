import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptAktualisierenComponent } from './rezept-aktualisieren.component';

describe('RezeptAktualisierenComponent', () => {
  let component: RezeptAktualisierenComponent;
  let fixture: ComponentFixture<RezeptAktualisierenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezeptAktualisierenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptAktualisierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
