import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { UserComponent } from '../pages/user/user.component';
import { Kategorie } from '../pages/kategorie-verwalten/kategorie';


@Injectable({
  providedIn: 'root'
})

export class KategorieService {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }
  readonly BaseURI = 'http://localhost:3000';

  getUserCategory() {
    return this.http.get<Kategorie>(this.BaseURI + '/categories');
  }

}
