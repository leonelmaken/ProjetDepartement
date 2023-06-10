import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables } from '../global-variable';

@Component({
  selector: 'app-header-principale',
  templateUrl: './header-principale.component.html',
  styleUrls: ['./header-principale.component.scss']
})
export class HeaderPrincipaleComponent {
  isFixed = false; //variable pour fixer la navbar
  public isConnected!: Boolean;
  menuSelectionne = 'accueil';

  constructor(private route: Router, private param: GlobalVariables){
    this.isConnected = this.param.isConnected;
   }

   //Fonction pour fixer la barre au dessus lorsqu'on scroll
  @HostListener('window:scroll')
  onWindowScroll(){
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixed = scrollOffset >= 50;
  }


  //Fonction pour l'activation d'un menu
  isActive(selection:string){
    return this.menuSelectionne === selection;
  }

  //Fonctions pour selectionner un menu specifique
  afficherMenu(selection : string){
    this.menuSelectionne = selection;
  }


  refresh() {
      this.isConnected = this.param.isConnected;
      console.log("Connected", this.isConnected);
  }
}
