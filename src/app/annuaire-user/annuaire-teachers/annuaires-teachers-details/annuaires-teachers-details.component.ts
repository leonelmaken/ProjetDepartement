import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEnseignant } from 'src/app/shared/model/enseignant';
import { EnseignantService } from 'src/app/services/enseignant/enseignant.service';

@Component({
  selector: 'app-annuaires-teachers-details',
  templateUrl: './annuaires-teachers-details.component.html',
  styleUrls: ['./annuaires-teachers-details.component.scss']
})
export class AnnuairesTeachersDetailsComponent {

title = "Mon profils";

public errMsg!: String;

public teacher: IEnseignant | undefined = <IEnseignant>{} ;

public currentUserData: IEnseignant | undefined;

constructor(private teacherService: EnseignantService, private route: ActivatedRoute) {}

ngOnInit(): void {
    const userID = Number(this.route.snapshot.paramMap.get("id"));

    this.teacherService.getAll().subscribe({
        next: teachers => {
            this.teacher = teachers.find(ent => ent.idUser == userID);
            this.currentUserData = this.teacher;
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

