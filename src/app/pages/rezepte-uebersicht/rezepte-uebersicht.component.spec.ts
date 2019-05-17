import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezepteUebersichtComponent } from './rezepte-uebersicht.component';

describe('RezepteUebersichtComponent', () => {
  let component: RezepteUebersichtComponent;
  let fixture: ComponentFixture<RezepteUebersichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezepteUebersichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezepteUebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
