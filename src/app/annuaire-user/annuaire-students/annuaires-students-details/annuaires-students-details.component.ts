import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';
import { IEtudiant } from 'src/app/shared/model/etudiant';

@Component({
  selector: 'app-annuaires-students-details',
  templateUrl: './annuaires-students-details.component.html',
  styleUrls: ['./annuaires-students-details.component.scss']
})
export class AnnuairesStudentsDetailsComponent {

  title = "Mon profils";

  public errMsg!: String;

  public student: IEtudiant | undefined = <IEtudiant>{} ;

  public currentUserData: IEtudiant | undefined;

  constructor(private studentService: EtudiantService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      const userID= Number(this.route.snapshot.paramMap.get("id"));

      this.studentService.getAll().subscribe({
          next: students => {
              this.student = students.find(ent => ent.idUser == userID);
              this.currentUserData = this.student;
          },
          error: err => this.errMsg = err
      }
      );

      console.log("On Init..." + userID);
  }


  editUserDialog(): void {
  }

  deconnexion(): void {}

}

