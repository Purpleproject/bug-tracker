import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';

import { TesteurComponent } from '../components/testeur/testeur.component';
import { ListeTesteursComponent } from '../components/liste-testeurs/liste-testeurs.component';
import { ListeTestComponent } from '../components/liste-test/liste-test.component';
import { DeveloppeurComponent } from '../components/developpeur/developpeur.component';
import { ListeUtilisateursComponent } from '../components/liste-utilisateur/liste-utilisateur.component';
import { FormulaireCandidaterComponent } from '../components/formulaire-candidater/formulaire-candidater.component';


//import components

const routes: Route[] = [
  { path: '', redirectTo: 'pageTesteur', pathMatch:"full" },
  { path: 'pageEditeur', component: DeveloppeurComponent, },
  { path: 'pageTesteur', component: TesteurComponent, },
  { path: 'pageTesteur/listeTesteurs', component: ListeTesteursComponent, },
  { path: 'pageTesteur/listeTests', component: ListeTestComponent, },
  { path: 'listeUtilisateurs', component: ListeUtilisateursComponent, },
  { path: 'candidater/:idU/:idT', component: FormulaireCandidaterComponent, },

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
