import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {Rezept} from '../rezepte-uebersicht/rezept';

@Component({
  selector: 'app-rezept-anlegen',
  templateUrl: './rezept-anlegen.component.html',
  styleUrls: ['./rezept-anlegen.component.css']
})
export class RezeptAnlegenComponent implements OnInit {

  rezepte = new Subject<Rezept[]>();


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  recipeAdd() {
    this.http.post('http://localhost:3000/recipes', {
      id: 5,
      rID: '5',
      label: 'Paprika',
      description: '',
      uID: null
    })
    .subscribe((res: any) => {
      console.log(res);
    });
  }
}
