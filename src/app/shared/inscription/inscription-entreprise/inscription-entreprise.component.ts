import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnterpriseService } from 'src/app/services/entreprise/enterprise.service';

@Component({
  selector: 'app-inscription-entreprise',
  templateUrl: './inscription-entreprise.component.html',
  styleUrls: ['./inscription-entreprise.component.css']
})
export class InscriptionEntrepriseComponent {
  isPasswordVisible=false;
  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder, private entrepriseService: EnterpriseService, private route: Router){
    this.form= this.fb.group({
      nom:['', Validators.required],
      location:['', Validators.required],
      photo:['', Validators.required],
      contributeNumber: ['', Validators.required],
      creationDate:['', Validators.required],
      mail:['', Validators.required],
      numTel:['', Validators.required],
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
  get nom(){
    return this.form.get('nom');
  }

  get location(){
    return this.form.get('location');
  }

  get creationDate(){
    return this.form.get('creationDate');
  }

  get mail(){
    return this.form.get('mail');
  }

  get numTel(){
    return this.form.get('numTel');
  }

  get password(){
    return this.form.get('password');
  }

  get photo(){
    return this.form.get('photo');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

    selectedImage: File | undefined;
    handleImageInput(event: any): void {
        this.selectedImage = event.target.files[0]; // Récupère le fichier sélectionné
    }

    //soumission du formulaire
    submit(){
        if(this.form.valid){

            console.log("Image", this.selectedImage);

            this.form.value.photo = this.selectedImage;
            try {
                this.entrepriseService.create(this.form.value).subscribe(data => console.log(data));
                console.log("Entreprise enregistrée", this.form.value);
                this.route.navigate(['/connexion']);

            } catch (error: any) {
                alert(error)
            }
        }
    }

}
