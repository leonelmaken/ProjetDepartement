import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnuaireRecommandationStudentsComponent } from './annuaire-recommandation-students/annuaire-recommandation-students.component';
import { AnnuaireRecommandationTeachersComponent } from './annuaire-recommandation-teachers/annuaire-recommandation-teachers.component';
import { AnnuaireCompaniesComponent } from './annuaire-user/annuaire-companies/annuaire-companies.component';
import { AnnuairesCompaniesDetailsComponent } from './annuaire-user/annuaire-companies/annuaires-companies-details/annuaires-companies-details.component';
import { AnnuaireStudentsComponent } from './annuaire-user/annuaire-students/annuaire-students.component';
import { AnnuairesStudentsDetailsComponent } from './annuaire-user/annuaire-students/annuaires-students-details/annuaires-students-details.component';
import { AnnuaireTeachersComponent } from './annuaire-user/annuaire-teachers/annuaire-teachers.component';
import { AnnuairesTeachersDetailsComponent } from './annuaire-user/annuaire-teachers/annuaires-teachers-details/annuaires-teachers-details.component';
import { AcceuilAppComponent } from './shared/acceuil-app/acceuil-app.component';
import { ActuDetailsComponent } from './shared/actualites/actu-details/actu-details.component';
import { ActualitesComponent } from './shared/actualites/actualites.component';
import { ConnexionComponent } from './shared/connexion/connexion.component';
import { InscriptionComponent } from './shared/inscription/inscription.component';
import { ListeEmploiComponent } from './shared/offfre-app/liste-emploi/liste-emploi.component';
import { ListeStageComponent } from './shared/offfre-app/liste-stage/liste-stage.component';
import { OfffreAppComponent } from './shared/offfre-app/offfre-app.component';
import { OffreDetailComponent } from './shared/offfre-app/offre-detail/offre-detail.component';
import { ProfilComponent } from './shared/profil/profil.component';
import { ProposComponent } from './shared/propos/propos.component';
import { ConnexionGuard } from './shared/connexion/connexion.guard';

const routes: Routes = [
    {path:'home', component: AcceuilAppComponent },
    {path:'annuaireCom', component: AnnuaireCompaniesComponent},
    {path:'annuaireCom/:id', component: AnnuairesCompaniesDetailsComponent},
    {path:'annuaireTeach', component: AnnuaireTeachersComponent},
    {path:'annuaireTeach/:id', component: AnnuairesTeachersDetailsComponent},
    {path:'annuaireStu', component: AnnuaireStudentsComponent},
    {path:'annuaireStu/:id', component: AnnuairesStudentsDetailsComponent},
    {path:'a_propos', component: ProposComponent},
    {path:'offres', component: OfffreAppComponent, /*canActivate: [ConnexionGuard]*/},
    {path:'offres/:id', component: OffreDetailComponent, /*canActivate: [ConnexionGuard]*/},
    {path:'event', component: ActualitesComponent},
    {path:'event/:id', component: ActuDetailsComponent},
    {path:'tRecomd', component: AnnuaireRecommandationTeachersComponent, /*canActivate: [ConnexionGuard]*/},
    {path:'stRecomd', component: AnnuaireRecommandationStudentsComponent, /*canActivate: [ConnexionGuard]*/},
    {path:'liststage', component: ListeStageComponent, /*canActivate: [ConnexionGuard]*/},
    {path:'listemploi', component: ListeEmploiComponent, /*canActivate: [ConnexionGuard]*/},
    {path:'connexion', component: ConnexionComponent},
    {path:'inscription', component: InscriptionComponent},
    {path:'profil', component: ProfilComponent, /*canActivate: [ConnexionGuard]*/},
    {path:'', redirectTo:'home' , pathMatch: 'full'},
    {path:'**', redirectTo:'home' , pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
