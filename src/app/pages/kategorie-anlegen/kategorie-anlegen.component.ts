import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Kategorie } from '../kategorie-verwalten/kategorie';

@Component({
  selector: 'app-kategorie-anlegen',
  templateUrl: './kategorie-anlegen.component.html',
  styleUrls: ['./kategorie-anlegen.component.css']
})
export class KategorieAnlegenComponent implements OnInit {

  kategorie = new Subject<Kategorie[]>();

  profileForm = new FormGroup({
    label: new FormControl(''),
  });

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  categorieAdd() {
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

    this.http.post('http://localhost:3000/categories',{
      label: this.profileForm.value.label,
      description: this.profileForm.value.description,
      uID: null
    }).subscribe((res: any) => {
      console.log(res);
    });
}}








