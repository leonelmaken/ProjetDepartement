import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnterpriseService } from 'src/app/services/entreprise/enterprise.service';
import { IEnterprise } from 'src/app/shared/model/enterprise';

@Component({
  selector: 'app-annuaires-companies-details',
  templateUrl: './annuaires-companies-details.component.html',
  styleUrls: ['./annuaires-companies-details.component.scss']
})
export class AnnuairesCompaniesDetailsComponent {

  title = "Mon profils";

  public errMsg!: String;

  public enterprise: IEnterprise | undefined = <IEnterprise>{} ;

  public currentUserData: IEnterprise | undefined;

  constructor(private enterpriseService: EnterpriseService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      const userID= 1;//Number(this.route.snapshot.paramMap.get("id"));

      this.enterpriseService.getAll().subscribe({
          next: enterprises => {
              this.enterprise = enterprises.find(ent => ent.idUser == userID);
              this.currentUserData = this.enterprise;
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

