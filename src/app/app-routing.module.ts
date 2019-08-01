import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { RegistrationComponent } from './pages/user/registration/registration.component';
import { LoginComponent } from './pages/user/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RezeptAnlegenComponent } from './pages/rezept-anlegen/rezept-anlegen.component';
import { RezeptDetailseiteComponent } from './pages/rezept-detailseite/rezept-detailseite.component';
import { KategorieVerwaltenComponent } from './pages/kategorie-verwalten/kategorie-verwalten.component';
import { RezeptUebersichtComponent } from './pages/rezepte-uebersicht/rezepte-uebersicht.component';
import { KategorieAnlegenComponent } from './pages/kategorie-anlegen/kategorie-anlegen.component';
import { RezeptAktualisierenComponent } from './pages/rezept-aktualisieren/rezept-aktualisieren.component';
import {ExtraOptions} from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};


// Das Routuing um die richtige Seite angezeigt zu bekommen
const routes: Routes = [
  {path: '', redirectTo: '/user/login', pathMatch: 'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'rezeptanlegen', component: RezeptAnlegenComponent, canActivate: [AuthGuard] },
  { path: 'rezeptdetailseite', component: RezeptDetailseiteComponent, canActivate: [AuthGuard] },
  { path: 'kategorieverwalten', component: KategorieVerwaltenComponent, canActivate: [AuthGuard] },
  { path: 'rezepteuebersicht', component: RezeptUebersichtComponent, canActivate: [AuthGuard] },
  { path: 'kategorieanlegen', component: KategorieAnlegenComponent, canActivate: [AuthGuard] },
  { path: 'rezeptaktualisieren', component: RezeptAktualisierenComponent, canActivate: [AuthGuard] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
