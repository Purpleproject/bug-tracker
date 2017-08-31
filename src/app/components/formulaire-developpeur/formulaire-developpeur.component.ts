import { Component, OnInit } from '@angular/core';
import { Editeur } from '../../entities/editeur';
import { EditeurService } from '../../services/editeur.service';

@Component({
  selector: 'app-formulaire-developpeur',
  templateUrl: './formulaire-developpeur.component.html',
  styleUrls: ['./formulaire-developpeur.component.css'],
  styles: [`
  .ng-valid { border-color: green; }
  .ng-invalid { border-color: red; } `
]
})
export class FormulaireDeveloppeurComponent implements OnInit {

  private editeur : Editeur = new Editeur(0, "","","",new Date(2000,12,12));

  constructor(private editeurService : EditeurService) { }

  onSubmit(): void {
    
    //console.log(this.testeur.nomUtilisateur);

    // appel au service :
    this.editeurService.creerEditeur(this.editeur)
                .subscribe(res => {console.log("appel envoyé : "+res);})

    console.log("plop"+this.editeur.nomUtilisateur);
  }

  ngOnInit() {
  }

}
