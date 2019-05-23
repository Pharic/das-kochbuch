import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {Rezept} from '../rezepte-uebersicht/rezept';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rezept-anlegen',
  templateUrl: './rezept-anlegen.component.html',
  styleUrls: ['./rezept-anlegen.component.css']
})
export class RezeptAnlegenComponent implements OnInit {

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

  recipeAdd() {
    this.http.post('http://localhost:3000/recipes', {
      rID: '5',
      label: 'Paprika',
      description: '',
      uID: null
    })
    .subscribe((res: any) => {
      console.log(res);
    });
  }

  onSubmit(form: NgForm) {
console.log(this.profileForm)

    this.http.post('http://localhost:3000/recipes',{
      rID: '5',
      label: this.profileForm.value.label,
      description: this.profileForm.value.description,
      uID: null
    }).subscribe((res: any) => {
      console.log(res);
    });
}}
