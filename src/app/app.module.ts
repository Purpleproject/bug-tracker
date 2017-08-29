import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TesteurComponent } from './components/testeur/testeur.component';
import { GestionTestsDevComponent } from './components/gestion-tests-dev/gestion-tests-dev.component';
import { ListeTesteursComponent } from './components/liste-testeurs/liste-testeurs.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteurComponent,
    GestionTestsDevComponent,
    ListeTesteursComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
