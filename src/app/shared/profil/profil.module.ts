import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetsComponent } from './projets/projets.component';
import { PropositionsComponent } from './propositions/propositions.component';
import { DemandesComponent } from './demandes/demandes.component';
import { DemandesEncadrementComponent } from './demandes-encadrement/demandes-encadrement.component';
import { VueGeneraleComponent } from './vue-generale/vue-generale.component';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    ProjetsComponent,
    PropositionsComponent,
    DemandesComponent,
    DemandesEncadrementComponent,
    VueGeneraleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticlesComponent,
    ProjetsComponent,
    PropositionsComponent,
    DemandesComponent,
    DemandesEncadrementComponent,
    VueGeneraleComponent
  ]
})
export class ProfilModule { }
