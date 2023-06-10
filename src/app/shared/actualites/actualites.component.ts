import { Component, OnInit } from '@angular/core';
import { IPublication } from '../model/publication';
import { ActivatedRoute } from '@angular/router';
import { ActualitesService } from 'src/app/services/actualites/actualites.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {

    public title = "Nos Evenements";

    private _actualiteresearch = '';

    public rechercherActivity: IPublication[] = [];

    public actualities: IPublication[] = [];

    public errMsg!: String;

    constructor(private actualitesService: ActualitesService,
      private route:ActivatedRoute ) { }


    ngOnInit() {

        this.actualitesService.getAll().subscribe({
          next: actualites => {
            this.actualities = actualites;
            this.rechercherActivity = this.actualities;
          },
          error: err => this.errMsg = err
        });

        this.actualiteresearch = '';
    }

    public get actualiteresearch(): string {
        return this._actualiteresearch;
    }

    public set actualiteresearch(research: string) {
        this._actualiteresearch = research;
        this.rechercherActivity = this.actualiteresearch ? this.researchactualites(this.actualiteresearch) : this.actualities;
    }

    private researchactualites(criteria: string): IPublication[] {
        criteria = criteria.toLocaleLowerCase();
        const response = this.actualities.filter(
          (actualite: IPublication) => (actualite.description.toLocaleLowerCase().indexOf(criteria) != -1 ||
            actualite.title.toLocaleLowerCase().indexOf(criteria) != -1)
        );
        return response;
    }

}
