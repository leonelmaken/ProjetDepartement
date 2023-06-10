import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  champSelectionne = 'etudiant'; //Par defaut, les champs de l'etudiant seront visibles

  //Fonction pour la visibilite des champs de formulaire specifiques a un utilisateur
  afficherChamp(selection : string){
    this.champSelectionne = selection;
  }

}
