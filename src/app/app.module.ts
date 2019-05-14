import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RezeptAnlegenComponent } from './pages/rezept-anlegen/rezept-anlegen.component';
import { RezeptDetailseiteComponent } from './pages/rezept-detailseite/rezept-detailseite.component';
import { HomeComponent } from './pages/home/home.component';
import { KategorieVerwaltenComponent } from './pages/kategorie-verwalten/kategorie-verwalten.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RezeptAnlegenComponent,
    RezeptDetailseiteComponent,
    HomeComponent,
    KategorieVerwaltenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
