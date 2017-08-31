import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';

import { TesteurComponent } from '../components/testeur/testeur.component';
import { ListeUtilisateursComponent } from '../components/liste-utilisateur/liste-utilisateur.component';
import { FormulaireCandidaterComponent } from '../components/formulaire-candidater/formulaire-candidater.component';

//import components

const routes: Route[] = [
 //{ path: '', redirectTo: 'candidater', pathMatch:"full" },
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
