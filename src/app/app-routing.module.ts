import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RezeptAnlegenComponent } from './pages/rezept-anlegen/rezept-anlegen.component';
import { RezeptDetailseiteComponent } from './pages/rezept-detailseite/rezept-detailseite.component';
import { KategorieVerwaltenComponent } from './pages/kategorie-verwalten/kategorie-verwalten.component';

// Das Routuing um die richtige Seite angeziegt zu bekommen
 const routes: Routes = [
   { path: '', pathMatch: 'full', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'rezeptanlegen', component: RezeptAnlegenComponent },
   { path: 'rezeptdetailseite', component: RezeptDetailseiteComponent },
   { path: 'kategorieverwalten', component: KategorieVerwaltenComponent }
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
