import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables } from '../global-variable';

@Component({
  selector: 'app-header-simple',
  templateUrl: './header-simple.component.html',
  styleUrls: ['./header-simple.component.scss']
})
export class HeaderSimpleComponent {

  estConnecte: Boolean = false;
  menuSelectionne = 'accueil';

  constructor(private route: Router, private param: GlobalVariables){
    this.estConnecte = this.param.isConnected;
   }


  //Fonction pour l'activation d'un menu
  isActive(selection:string){
    return this.menuSelectionne === selection;
  }

  //Fonctions pour selectionner un menu specifique
  afficherMenu(selection : string){
    this.menuSelectionne = selection;
  }

}
