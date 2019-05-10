import { Component, OnInit, Input } from '@angular/core';
import { Rezept } from '../rezept-anlegen/test';

@Component({
  selector: 'app-rezept-detailseite',
  templateUrl: './rezept-detailseite.component.html',
  styleUrls: ['./rezept-detailseite.component.css']
})
export class RezeptDetailseiteComponent implements OnInit {

  @Input() rezept: Rezept;


  constructor() { }

  ngOnInit() {
  }

}
