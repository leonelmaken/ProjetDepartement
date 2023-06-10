import { Component, OnInit } from '@angular/core';
import { IOffre } from '../../model/offre';
import { OffreService } from 'src/app/services/offre/offre.service';

@Component({
  selector: 'app-liste-emploi',
  templateUrl: './liste-emploi.component.html',
  styleUrls: ['./liste-emploi.component.scss']
})
export class ListeEmploiComponent implements OnInit {

  public title = "Les offres d'emploi";

  private _offreresearch = '';

  public rechercherOfrre: IOffre[] = [];

  public offres: IOffre[] = [];

  public errMsg!: String;

  constructor(private offresService: OffreService) { }


  ngOnInit() {

    this.offresService.getAll().subscribe({
      next: offres => {
        this.offres = offres.filter(of => of.type == 'Emploi');
        //this.offres = offres;
        this.rechercherOfrre = this.offres;
      },
      error: err => this.errMsg = err
    });

    this.offreresearch = '';
  }

  public get offreresearch(): string {
    return this._offreresearch;
  }

  public set offreresearch(research: string) {
    this._offreresearch = research;
    this.rechercherOfrre = this.offreresearch ? this.researchoffres(this.offreresearch) : this.offres;
  }

  private researchoffres(criteria: string): IOffre[] {
    criteria = criteria.toLocaleLowerCase();
    const response = this.offres.filter(
      (offre: IOffre) => (offre.poste.toLocaleLowerCase().indexOf(criteria) != -1 ||
      offre.type.toLocaleLowerCase().indexOf(criteria) != -1 ||
      offre.competences.toLocaleLowerCase().indexOf(criteria) != -1 ||
      offre.periode.toLocaleLowerCase().indexOf(criteria) != -1 ||
      offre.description.toLocaleLowerCase().indexOf(criteria) != -1
    ));
    return response;
  }

}
