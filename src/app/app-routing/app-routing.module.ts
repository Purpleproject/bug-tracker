import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';

import { TesteurComponent } from '../components/testeur/testeur.component';
import { ListeUtilisateursComponent } from '../components/liste-utilisateur/liste-utilisateur.component';

//import components

const routes: Route[] = [
  //{ path: '', redirectTo: 'listeUtilisateurs'},
  // pathMatch : charge seulement si l'intégralité de l'url correspond
 { path: 'listeUtilisateurs', component: ListeUtilisateursComponent, },
  //{ path: 'profil/editer/:id', component: EditionProfilComponent, },
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
