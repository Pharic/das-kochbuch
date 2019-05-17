import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {Rezept} from './rezept';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-rezepte-uebersicht',
  templateUrl: './rezepte-uebersicht.component.html',
  styleUrls: ['./rezepte-uebersicht.component.css']
})
export class RezeptUebersichtComponent implements OnInit {


  //rezepte = new Subject<Rezept[]>();
  rezepte;

  constructor( private service: RecipeService, private http: HttpClient) { }

  ngOnInit() {

    this.service.getUserRecipes().subscribe(
      res => {
        //console.log(res);
        this.rezepte = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  }
