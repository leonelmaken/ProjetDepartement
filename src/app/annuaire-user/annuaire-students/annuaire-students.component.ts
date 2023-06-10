import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';
import { IEtudiant } from 'src/app/shared/model/etudiant';

@Component({
  selector: 'app-annuaire-students',
  templateUrl: './annuaire-students.component.html',
  styleUrls: ['./annuaire-students.component.scss']
})
export class AnnuaireStudentsComponent  implements OnInit  {

  public title ='Liste des etudiants';

  private _studentresearch = '';

  public rechercherstudent : IEtudiant[] = [];

  public errorMessage!: string;

  constructor(private studentAnnuaireService: EtudiantService){
       }


  ngOnInit() {

    this.studentAnnuaireService.getAll().subscribe({
      next: students =>   {
        this.students = students;
        this.rechercherstudent = this.students;
      },
      error: err => this.errorMessage = err
    });

        this.studentresearch = '';

     }

     public get studentresearch(): string{
         return this._studentresearch;
        }

     public set studentresearch(filter:string) {
        this._studentresearch = filter;
        this.rechercherstudent = this.studentresearch ? this.studentRechercher(this.studentresearch): this.students;

       }

       private studentRechercher(critere:string): IEtudiant[]{
            critere = critere.toLocaleLowerCase();
            const answer = this.students.filter(
              (student:IEtudiant) =>(
                String(student.numTel).toLocaleLowerCase().indexOf(critere)!=-1
              || student.prenom.toLocaleLowerCase().indexOf(critere)!=-1
              || student.nom.toLocaleLowerCase().indexOf(critere)!=-1
              || student.niveau.toLocaleLowerCase().indexOf(critere)!=-1
              || student.roles.toLocaleLowerCase().indexOf(critere)!=-1)
              );
            return answer;

          }

  public students : IEtudiant[]=[]


}
