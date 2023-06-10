import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalVariables } from '../global-variable';
import { EnseignantService } from 'src/app/services/enseignant/enseignant.service';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticleComponent {
  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder, private param: GlobalVariables,
    private enseignantService: EnseignantService,
    private etudiantService: EtudiantService, private route: Router){

    this.form= this.fb.group({
      theme:['', Validators.required],
      link:['', Validators.required],
      nameAuteur:['', Validators.required],
      description:['', Validators.nullValidator]
    });
  }

  //Les getters pour la validite des champs
  get theme(){
    return this.form.get('theme');
  }

  get link(){
    return this.form.get('link');
  }

  get nameAuteur(){
    return this.form.get('nameAuteur');
  }


  get description(){
    return this.form.get('description');
  }

    //soumission du formulaire
    submit(){
        if(this.form.valid){
            if (this.param.currentUserData.roles == "Etudiant") {
                this.etudiantService.addArticles(this.param.currentUserData.idUser, this.form.value)
                console.log("Success");
            } else if (this.param.currentUserData.roles == "Enseignant") {
                this.enseignantService.addArticles(this.param.currentUserData.idUser, this.form.value)
                console.log("Success");
            } else console.log("Faill");

            this.route.navigate(['profil']);
        }
    }

}
