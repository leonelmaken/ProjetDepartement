import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnseignantService } from 'src/app/services/enseignant/enseignant.service';

@Component({
  selector: 'app-inscription-enseignant',
  templateUrl: './inscription-enseignant.component.html',
  styleUrls: ['./inscription-enseignant.component.css']
})
export class InscriptionEnseignantComponent {
  isPasswordVisible=false;
  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder, private enseignantService: EnseignantService, private route: Router){
    this.form= this.fb.group({
      prenom:['', Validators.required],
      nom:['', Validators.required],
      matricule:['', Validators.required],
      mail:['', Validators.required],
      grade:['', Validators.required],
      numTel:['', Validators.required],
      competences:['', Validators.nullValidator],
      password:['', Validators.required],
      confirmPassword:['', Validators.required],
      conditionsInscription:[false, Validators.requiredTrue],
      specialite:['', Validators.required]
    });
  }

  //Fonction pour la visibilite du mot de passe
  togglePasswordVisibility(){
    this.isPasswordVisible=!this.isPasswordVisible;
  }

  //Les getters pour la validite des champs
  get prenom(){
    return this.form.get('prenom');
  }

  get nom(){
    return this.form.get('nom');
  }

  get matricule(){
    return this.form.get('matricule');
  }

  get mail(){
    return this.form.get('mail');
  }

  get telephone(){
    return this.form.get('telephone');
  }

  get password(){
    return this.form.get('password');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  get specialite(){
    return this.form.get('confirmPassword');
  }

  handleImageInput(event: any): void {
    const file = event.target.files[0]; // Récupère le fichier sélectionné
  }

  //soumission du formulaire
  submit(){
    if(this.form.valid){
        this.enseignantService.create(this.form.value).subscribe(data => console.log(data));
        console.log(this.form.value);
        this.route.navigate(['/connexion']);
    }
  }

}
