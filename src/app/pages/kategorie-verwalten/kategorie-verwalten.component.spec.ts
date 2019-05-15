import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorieVerwaltenComponent } from './kategorie-verwalten.component';

describe('KategorieVerwaltenComponent', () => {
  let component: KategorieVerwaltenComponent;
  let fixture: ComponentFixture<KategorieVerwaltenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorieVerwaltenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorieVerwaltenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
