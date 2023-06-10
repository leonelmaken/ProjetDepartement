import { Component, OnInit } from '@angular/core';
import { IEnseignant } from '../shared/model/enseignant';
import { EnseignantService } from '../services/enseignant/enseignant.service';

@Component({
  selector: 'app-annuaire-recommandation-teachers',
  templateUrl: './annuaire-recommandation-teachers.component.html',
  styleUrls: ['./annuaire-recommandation-teachers.component.scss']
})
export class AnnuaireRecommandationTeachersComponent implements OnInit  {

  public title ='Voici la liste des enseignants que vous pouvez recommander';

  private _teacherresearch = '';

  public rechercherTeacher : IEnseignant[] = [];

  public errorMessage!: string;

  constructor(private teacherAnnuaireService: EnseignantService){
       }


  ngOnInit() {

    this.teacherAnnuaireService.getAll().subscribe({
      next: teachers =>   {
        this.teachers = teachers;
        this.rechercherTeacher = this.teachers;
      },
      error: err => this.errorMessage = err
    });

        this.teacherresearch = '';

     }

     public get teacherresearch(): string{
         return this._teacherresearch;
        }

     public set teacherresearch(filter:string) {
        this._teacherresearch = filter;
        this.rechercherTeacher = this.teacherresearch ? this.teacherRechercher(this.teacherresearch): this.teachers;

       }

       private teacherRechercher(critere:string): IEnseignant[]{
            critere = critere.toLocaleLowerCase();
            const answer = this.teachers.filter(
              (teacher:IEnseignant) =>(
                String(teacher.numTel).toLocaleLowerCase().indexOf(critere)!=-1
              || teacher.prenom.toLocaleLowerCase().indexOf(critere)!=-1
              || teacher.nom.toLocaleLowerCase().indexOf(critere)!=-1
              || teacher.specialite.toLocaleLowerCase().indexOf(critere)!=-1
              || teacher.roles.toLocaleLowerCase().indexOf(critere)!=-1)
              );
            return answer;

          }

  public teachers : IEnseignant[]=[]
public recommander(){

}

}
