import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TesteurComponent } from './components/testeur/testeur.component';
import { GestionTestsDevComponent } from './components/gestion-tests-dev/gestion-tests-dev.component';
import { ListeTesteursComponent } from './components/liste-testeurs/liste-testeurs.component';
import { DeveloppeurComponent } from './developpeur/developpeur.component';
import { FormulaireTestDevComponent } from './components/formulaire-test-dev/formulaire-test-dev.component';

//Import des services
import {CandidatureService} from './services/candidature.service';
import {TesteurService} from './services/testeur.service';
import {EditeurService} from './services/editeur.service';
import {FicheBugService} from './services/fiche-bug.service';
import {TestService} from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    TesteurComponent,
    GestionTestsDevComponent,
    ListeTesteursComponent,
    DeveloppeurComponent,
    FormulaireTestDevComponent,	
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CandidatureService,
    TesteurService,
    EditeurService,
    FicheBugService,
    TestService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
