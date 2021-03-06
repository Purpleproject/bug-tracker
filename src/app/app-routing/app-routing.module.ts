import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';

// Import Inscription
import { FormulaireTesteurComponent } from '../components/formulaire-testeur/formulaire-testeur.component';
import { FormulaireDeveloppeurComponent } from '../components/formulaire-developpeur/formulaire-developpeur.component';

// Les imports testeurs
import { TesteurComponent } from '../components/testeur/testeur.component';
import { ListeTesteursComponent } from '../components/liste-testeurs/liste-testeurs.component';
import { ListeTestComponent } from '../components/liste-test/liste-test.component';
import { ListeTestParIdComponent } from '../components/liste-test-par-id/liste-test-par-id.component';

// Les imports editeurs
import { DeveloppeurComponent } from '../components/developpeur/developpeur.component';
import { FormulaireTestDevComponent } from '../components/formulaire-test-dev/formulaire-test-dev.component';

import { ListeUtilisateursComponent } from '../components/liste-utilisateur/liste-utilisateur.component';
import { FormulaireCandidaterComponent } from '../components/formulaire-candidater/formulaire-candidater.component';

import { FormulaireFichebugComponent } from '../components/formulaire-fichebug/formulaire-fichebug.component';

// import image 
import { ImageAccueilComponent } from '../components/image-accueil/image-accueil.component';

const routes: Route[] = [
  {path:'accueil', component: ImageAccueilComponent},
  { path: '', redirectTo: 'accueil', pathMatch: "full" },
  // Inscription
  { path: 'inscriptionTesteur', component: FormulaireTesteurComponent, },
  { path: 'inscriptionEditeur', component: FormulaireDeveloppeurComponent, },

  // Les imports editeurs
  { path: 'pageEditeur', component: DeveloppeurComponent, },
  { path: 'pageEditeur/creationTest/:idE', component: FormulaireTestDevComponent, },

  // Les imports testeurs
  { path: 'pageTesteur', component: TesteurComponent, },
  { path: 'pageTesteur/listeTesteurs', component: ListeTesteursComponent, },
  { path: 'pageTesteur/listeTests', component: ListeTestComponent, },
  { path: 'pageTesteur/listeTestsIdTesteur', component: ListeTestParIdComponent, },
  { path: 'candidater/:idU/:idT', component: FormulaireCandidaterComponent, },

  { path: 'listeUtilisateurs', component: ListeUtilisateursComponent, },
  

  {path: 'pageTesteur/listeTest/ajouterBug/:idTest/:idTesteur', component: FormulaireFichebugComponent,},
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
