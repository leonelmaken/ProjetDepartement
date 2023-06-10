import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables } from '../global-variable';
import { IUser } from '../model/user';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent {
    isFixed = false;
    public isConnected!: Boolean;
    menuSelectionne = 'accueil';
    current: IUser = <IUser>{};

  constructor(private route: Router, private param: GlobalVariables){
    this.isConnected = this.param.isConnected;
    this.current = param.currentUserData;
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
