import { Component, HostListener } from "@angular/core";
import { GlobalVariables } from "../global-variable";
import { IUser } from "../model/user";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  isFixed = false; //Variable qui permettra de fixed notre sous barre de navigation lorsqu'on scroll. Par defaut, la barre n'est pas fixee
  menuSelectionne = 'overview'; //Par defaut, les elements de la section profil seront visibles
  typeSousMenu!: string; //variable qui contiendre l'un des sous menus: emploi, stage, en cours, acheve et parrainage



  // ######################################################

  //Variable ou seront stockees les donnees de la base de donnees de notre API
  donneesUtilisateur!: any;

  //On cree une instance du service HttpClient
  constructor(private param: GlobalVariables){ }

  //On recupere les donnees de l'enregistrement dans la base de donnees de notre API
  ngOnInit(){
    this.donneesUtilisateur = this.param.currentUserData;
  }

  //Fonction pour fixer la sous-barre de menu lorsqu'on scroll
  @HostListener('window:scroll')
  onWindowScroll(){
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixed = scrollOffset >= 50;
  }
  //Fonction pour l'activation d'un menu
  isActive(selection:string){
    return this.menuSelectionne === selection;
  }

  //Fonctions pour la visibilite des donnees specifiques a un menu
  afficherMenu(selection : string){
    this.menuSelectionne = selection;
  }

  //Fonction de recuperation du nom du sous-menu
  recupererSousMenu( sousMenu:string){

    if (sousMenu === 'enCours') {
      this.typeSousMenu = "En cours";
    }
    if (sousMenu === 'acheve') {
      this.typeSousMenu = "Terminé";
    }
    if (sousMenu === 'emploi') {
      this.typeSousMenu = "Emploi";
    }
    if (sousMenu === 'stage') {
      this.typeSousMenu = "Stage";
    }
    if (sousMenu === 'parrainage') {
      this.typeSousMenu = "parrainage";
    }
  }

    logout() {
        this.param.isConnected = false;
        this.param.currentUserData = <IUser>{};
        console.log("Disconnected", !this.param.isConnected);

    }


}
