import { Component, OnInit } from '@angular/core';
import { Rezept } from './test';
import { REZEPTE } from './mock-test';
// import { recipes } from '../../../../server/db.json';

@Component({
  selector: 'app-rezept-anlegen',
  templateUrl: './rezept-anlegen.component.html',
  styleUrls: ['./rezept-anlegen.component.css']
})
export class RezeptAnlegenComponent implements OnInit {

  rezepte = REZEPTE;
  selectedRezept: Rezept;

  constructor() { }

  ngOnInit() {
  }

  onSelect(rezept: Rezept): void {
    this.selectedRezept = rezept;
  }

}
