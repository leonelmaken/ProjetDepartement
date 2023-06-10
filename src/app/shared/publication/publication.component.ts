import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {
  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      titre:['', Validators.required],
    });
  }

  //soumission du formulaire
  submit(){
    if(this.form.valid){

    }
  }
}
