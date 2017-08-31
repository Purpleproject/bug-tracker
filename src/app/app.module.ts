import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TesteurComponent } from './components/testeur/testeur.component';
import { GestionTestsDevComponent } from './components/gestion-tests-dev/gestion-tests-dev.component';
import { ListeTesteursComponent } from './components/liste-testeurs/liste-testeurs.component';
import { DeveloppeurComponent } from './components/developpeur/developpeur.component';
import { FormulaireTestDevComponent } from './components/formulaire-test-dev/formulaire-test-dev.component';
import { FormAvisComponent } from './components/form-avis/form-avis.component';

//Import des services
import {CandidatureService} from './services/candidature.service';
import {TesteurService} from './services/testeur.service';
import {EditeurService} from './services/editeur.service';
import {FicheBugService} from './services/fiche-bug.service';
import {TestService} from './services/test.service';
import { UtilisateurServiceService } from './services/utilisateur-service.service';
import { ListeUtilisateursComponent } from './components/liste-utilisateur/liste-utilisateur.component';
import { FormulaireTesteurComponent } from './components/formulaire-testeur/formulaire-testeur.component';
import { FormulaireDeveloppeurComponent } from './components/formulaire-developpeur/formulaire-developpeur.component';
import { ListeTestComponent } from './components/liste-test/liste-test.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteurComponent,
    GestionTestsDevComponent,
    ListeTesteursComponent,
    DeveloppeurComponent,
    FormulaireTestDevComponent,
    FormAvisComponent,
    ListeUtilisateursComponent,
    FormulaireTesteurComponent,
    FormulaireDeveloppeurComponent,
    ListeTestComponent,	
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
    TestService,
    UtilisateurServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
