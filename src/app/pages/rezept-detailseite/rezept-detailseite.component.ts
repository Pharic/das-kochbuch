import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {Rezept} from '../rezepte-uebersicht/rezept';
import { RecipeService } from 'src/app/services/recipe.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-rezept-detailseite',
  templateUrl: './rezept-detailseite.component.html',
  styleUrls: ['./rezept-detailseite.component.css']
})
export class RezeptDetailseiteComponent implements OnInit {

  //rezepte = new Subject<Rezept[]>();
  rezepte;

  constructor( private service: RecipeService, private http: HttpClient) { }

  ngOnInit() {
    this.service.getUserRecipes().subscribe(
      res => {
        console.log(res);
        this.rezepte = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  recipeDelete(id: any) {
    console.log(id);
    this.http.delete('http://localhost:3000/recipes/' + id).subscribe((res: any) => {
      console.log(res);
    });
    }
}
