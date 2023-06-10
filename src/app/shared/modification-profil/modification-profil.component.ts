import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modification-profil',
  templateUrl: './modification-profil.component.html',
  styleUrls: ['./modification-profil.component.css']
})
export class ModificationProfilComponent {


  isPasswordVisible=false;

  constructor(private route: Router){ }

  //fonction qui navigue vers le profil
  retourProfil(){
    this.route.navigate(['/monProfil'])
  }

  //Fonction pour la visibilite du mot de passe
  togglePasswordVisibility(){
    this.isPasswordVisible=!this.isPasswordVisible;
  }

  //soumission du formulaire
  submit(){

  }

}
