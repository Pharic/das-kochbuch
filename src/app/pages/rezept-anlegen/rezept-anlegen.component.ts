import { Component, OnInit } from '@angular/core';
import { Rezept } from './test';
import { REZEPTE } from './mock-test';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
// import { recipes } from '../../../../server/db.json';

@Component({
  selector: 'app-rezept-anlegen',
  templateUrl: './rezept-anlegen.component.html',
  styleUrls: ['./rezept-anlegen.component.css']
})
export class RezeptAnlegenComponent implements OnInit {

  loading = false;
  rezepte = new Subject<Rezept[]>();
  selectedRezept: Rezept;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loading = true;
    this.http.get('http://localhost:3000/recipes').subscribe((rezepte: Rezept[]) => {
      this.loading = false;
      this.rezepte.next(rezepte);
    });
  }

  test() {
    this.http.post('http://localhost:3000/recipes', {
      id: 2,
      rID: "2",
      label: "Döner",
      description: "",
      uID: null
    })
    .subscribe((res: any) => {
      console.log(res);
    });
  }

  onSelect(rezept: Rezept): void {
    this.selectedRezept = rezept;
  }

}
