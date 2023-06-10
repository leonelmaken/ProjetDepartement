import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';

@Component({
  selector: 'app-inscription-etudiant',
  templateUrl: './inscription-etudiant.component.html',
  styleUrls: ['./inscription-etudiant.component.css']
})
export class InscriptionEtudiantComponent {
  isPasswordVisible=false;
  form! : FormGroup;

  //On verifie que chaque champ soit remplie
  constructor(private fb : FormBuilder, private etudiantSrevice: EtudiantService, private route: Router){
    this.form= this.fb.group({
      prenom:['', Validators.required],
      nom:['', Validators.required],
      matricule:['', Validators.required],
      mail:['', Validators.required],
      niveau:['', Validators.required],
      numTel:['', Validators.required],
      competence:['', Validators.nullValidator],
      password:['', Validators.required],
      confirmPassword:['', Validators.required],
      conditionsInscription:[false, Validators.requiredTrue]
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

  get level(){
    return this.form.get('niveau');
  }

  get telephone(){
    return this.form.get('numTel');
  }

  get password(){
    return this.form.get('password');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  handleImageInput(event: any): void {
    const file = event.target.files[0]; // Récupère le fichier sélectionné
  }

  //soumission du formulaire
  submit(){
    if(this.form.valid){
        console.log(this.form.value);
        this.etudiantSrevice.create(this.form.value).subscribe(data => console.log(data));
        this.route.navigate(['/connexion']);
    } else {
        console.log(this.form);
    }
  }

}
