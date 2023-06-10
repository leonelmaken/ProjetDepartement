import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionEnseignantComponent } from './inscription-enseignant/inscription-enseignant.component';
import { InscriptionEntrepriseComponent } from './inscription-entreprise/inscription-entreprise.component';
import { InscriptionEtudiantComponent } from './inscription-etudiant/inscription-etudiant.component';



@NgModule({
  declarations: [
    InscriptionEnseignantComponent,
    InscriptionEntrepriseComponent,
    InscriptionEtudiantComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InscriptionEnseignantComponent,
    InscriptionEntrepriseComponent,
    InscriptionEtudiantComponent
  ]
})
export class InscriptionModule { }
