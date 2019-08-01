import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorieAnlegenComponent } from './kategorie-anlegen.component';

describe('KategorieAnlegenComponent', () => {
  let component: KategorieAnlegenComponent;
  let fixture: ComponentFixture<KategorieAnlegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorieAnlegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorieAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
