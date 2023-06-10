import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/services/entreprise/enterprise.service';
import { IEnterprise } from 'src/app/shared/model/enterprise';

@Component({
  selector: 'app-annuaire-companies',
  templateUrl: './annuaire-companies.component.html',
  styleUrls: ['./annuaire-companies.component.scss']
})
export class AnnuaireCompaniesComponent implements OnInit  {

  public title ='liste des entreprises';

  private _companyresearch = '';

  public recherchercompany : IEnterprise[] = [];

  public errorMessage!: string;

  public companies : IEnterprise[]=[];

  constructor(private companyAnnuaireService: EnterpriseService){
       }


  ngOnInit() {

    this.companyAnnuaireService.getAll().subscribe({
      next: companies =>   {
        this.companies = companies;
        this.recherchercompany = this.companies;
      },
      error: err => this.errorMessage = err
    });

        this.companyresearch = '';

     }

     public get companyresearch(): string{
         return this._companyresearch;
        }

     public set companyresearch(filter:string) {
        this._companyresearch = filter;
        this.recherchercompany = this.companyresearch ? this.companieRechercher(this.companyresearch): this.companies;

       }

       private companieRechercher(critere:string): IEnterprise[]{
            critere = critere.toLocaleLowerCase();
            const answer = this.companies.filter(
              (company:IEnterprise) =>(
                String(company.numTel).toLocaleLowerCase().indexOf(critere)!=-1
              || company.nom.toLocaleLowerCase().indexOf(critere)!=-1
              || company.webSite.toLocaleLowerCase().indexOf(critere)!=-1
              || company.location.toLocaleLowerCase().indexOf(critere)!=-1
              || company.roles.toLocaleLowerCase().indexOf(critere)!=-1)
              );
            return answer;

          }



}
