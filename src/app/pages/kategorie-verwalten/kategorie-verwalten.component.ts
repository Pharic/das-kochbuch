import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {Kategorie} from './kategorie';
import { KategorieService } from 'src/app/services/kategorie.service';


@Component({
  selector: 'app-kategorie-verwalten',
  templateUrl: './kategorie-verwalten.component.html',
  styleUrls: ['./kategorie-verwalten.component.css']
})
export class KategorieVerwaltenComponent implements OnInit {

  kategorie;

  constructor( private service: KategorieService, private http: HttpClient) { }

  ngOnInit() {

    this.service.getUserCategory().subscribe(
      res => {
        this.kategorie = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  kategorieDelete(id: any) {
    console.log(id);
    this.http.delete('http://localhost:3000/categories/' + id).subscribe((res: any) => {
      console.log(res);
    });
  }

}
