import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  form! : FormGroup;


  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      theme:['', Validators.required],
      statut:['', Validators.required],
      projetPersonnel:['', Validators.required],
      encadreur:['', Validators.required],//ce champ sera obligatoire uniquement si projetPersonnel vaut OUI

    });
      //on verifie s'il faut rendre le champ encadreur obligatoire ou pas
    this.form.get('projetPersonnel')?.valueChanges.subscribe((value) => {
      if (value === 'non') {
        this.form.get('encadreur')?.setValidators(Validators.required);
      }else{
        this.form.get('encadreur')?.clearValidators();
      }
      this.form.get('encadreur')?.updateValueAndValidity();
    });
  }

  //soumission du formulaire
  submit(){
    if(this.form.valid){

    }
  }

  //Les getters pour la validite des champs
  get theme(){
    return this.form.get('theme');
  }

  get statut(){
    return this.form.get('statut');
  }

  get encadreur(){
    return this.form.get('encadreur');
  }

  get projetPersonnel(){
    return this.form.get('projetPersonnel');
  }

}
