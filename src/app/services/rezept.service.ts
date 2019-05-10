
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Rezept } from '../pages/rezept-anlegen/test';
import { REZEPTE } from '../pages/rezept-anlegen/mock-test';

import { UserService } from './user.service';
//import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  //constructor(private messageService: MessageService) { }

  getRezepte(): Observable<Rezept[]> {
    //this.messageService.add('RezeptService: fetched Rezepte');
    return of(REZEPTE);
  }
}

getUserProfile() {
  return this.http.get(this.BaseURI + '/recipes');
}
