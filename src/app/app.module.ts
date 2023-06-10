import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AnnuaireCompaniesComponent } from './annuaire-user/annuaire-companies/annuaire-companies.component';
import { AnnuairesCompaniesDetailsComponent } from './annuaire-user/annuaire-companies/annuaires-companies-details/annuaires-companies-details.component';
import { AnnuaireStudentsComponent } from './annuaire-user/annuaire-students/annuaire-students.component';
import { AnnuairesStudentsDetailsComponent } from './annuaire-user/annuaire-students/annuaires-students-details/annuaires-students-details.component';
import { AnnuaireTeachersComponent } from './annuaire-user/annuaire-teachers/annuaire-teachers.component';
import { AnnuairesTeachersDetailsComponent } from './annuaire-user/annuaire-teachers/annuaires-teachers-details/annuaires-teachers-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnuaireOffresEntrepriseRecommandationComponent } from './companies/annuaire-offres-entreprise-recommandation/annuaire-offres-entreprise-recommandation.component';
import { AnnuaireOffresEntrepriseSouscriptionComponent } from './companies/annuaire-offres-entreprise-souscription/annuaire-offres-entreprise-souscription.component';
import { AnnuaireOffresEntrepriseComponent } from './companies/annuaire-offres-entreprise/annuaire-offres-entreprise.component';
import { FormulaireAjoutOffresEntrepriseComponent } from './companies/formulaire-ajout-offres-entreprise/formulaire-ajout-offres-entreprise.component';
import { AcceuilAppComponent } from './shared/acceuil-app/acceuil-app.component';
import { ActuDetailsComponent } from './shared/actualites/actu-details/actu-details.component';
import { ActualitesComponent } from './shared/actualites/actualites.component';
import { InscriptionComponent } from './shared/inscription/inscription.component';
import { OfffreAppComponent } from './shared/offfre-app/offfre-app.component';
import { OffreDetailComponent } from './shared/offfre-app/offre-detail/offre-detail.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AnnuaireRecommandationTeachersComponent } from './annuaire-recommandation-teachers/annuaire-recommandation-teachers.component';
import { AnnuaireRecommandationStudentsComponent } from './annuaire-recommandation-students/annuaire-recommandation-students.component';
import { ListeStageComponent } from './shared/offfre-app/liste-stage/liste-stage.component';
import { ListeEmploiComponent } from './shared/offfre-app/liste-emploi/liste-emploi.component';
import { HeaderPrincipaleComponent } from './shared/header-principale/header-principale.component';
import { HeaderSimpleComponent } from './shared/header-simple/header-simple.component';
import { CommonModule } from '@angular/common';
import { GlobalVariables } from './shared/global-variable';
import { InscriptionModule } from './shared/inscription/inscription.module';
import { ConnexionComponent } from './shared/connexion/connexion.component';
import { ProfilComponent } from './shared/profil/profil.component';
import { ProfilModule } from './shared/profil/profil.module';
import { ArticleComponent } from './shared/articles/articles.component';
import { HeaderAppComponent } from './shared/header-fixed/header-app.component';
import { PublicationComponent } from './shared/publication/publication.component';
import { ProposComponent } from './shared/propos/propos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    HeaderSimpleComponent,
    HeaderPrincipaleComponent,
    ArticleComponent,
    ActualitesComponent,
    ActuDetailsComponent,
    OfffreAppComponent,
    AcceuilAppComponent,
    AnnuaireTeachersComponent,
    AnnuaireStudentsComponent,
    ConnexionComponent,
    AnnuaireCompaniesComponent,
    AnnuaireOffresEntrepriseComponent,
    AnnuaireOffresEntrepriseSouscriptionComponent,
    AnnuaireOffresEntrepriseRecommandationComponent,
    FormulaireAjoutOffresEntrepriseComponent,
    AnnuairesCompaniesDetailsComponent,
    AnnuairesTeachersDetailsComponent,
    AnnuairesStudentsDetailsComponent,
    OffreDetailComponent,
    ProposComponent,
    FooterComponent,
    AnnuaireRecommandationTeachersComponent,
    AnnuaireRecommandationStudentsComponent,
    ListeStageComponent,
    ListeEmploiComponent,
    ProfilComponent,
    PublicationComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    InscriptionModule,
    FormsModule,
    ReactiveFormsModule,
    ProfilModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GlobalVariables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
