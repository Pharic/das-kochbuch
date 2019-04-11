import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RezeptAnlegenComponent } from './pages/rezept-anlegen/rezept-anlegen.component';
import { RezeptDetailseiteComponent } from './pages/rezept-detailseite/rezept-detailseite.component';

 const routes: Routes = [
   { path: '', pathMatch: 'full', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'rezeptanlegen', component: RezeptAnlegenComponent },
   { path: 'rezeptdetailseite', component: RezeptDetailseiteComponent }
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
