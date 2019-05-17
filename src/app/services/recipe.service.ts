import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { UserComponent } from '../pages/user/user.component';
import { Rezept } from '../pages/rezepte-uebersicht/rezept';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }
  readonly BaseURI = 'http://localhost:3000';

  getUserRecipes() {
    return this.http.get<Rezept>(this.BaseURI + '/recipes');
  }

}
