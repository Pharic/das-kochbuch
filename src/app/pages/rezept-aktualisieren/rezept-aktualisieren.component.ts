import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Kategorie } from '../kategorie-verwalten/kategorie';
import { Rezept } from '../rezepte-uebersicht/rezept';


@Component({
  selector: 'app-rezept-aktualisieren',
  templateUrl: './rezept-aktualisieren.component.html',
  styleUrls: ['./rezept-aktualisieren.component.css']
})
export class RezeptAktualisierenComponent implements OnInit {

  rezepte = new Subject<Rezept[]>();

  profileForm = new FormGroup({
    label: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  recipeUpdate() {
    this.http.put('http://localhost:3000/recipes', {
      rID: '5',
      label: 'Paprika',
      description: '',
      uID: null
    })
    .subscribe((res: any) => {
      console.log(res);
    });
  }

  onSubmit(form: NgForm, id: any) {

    this.http.put('http://localhost:3000/recipes/' + id,
    {
      label: this.profileForm.value.label,
      description: this.profileForm.value.description,
      uID: null
    }).subscribe((res: any) => {
      console.log(res);
    });
}}
