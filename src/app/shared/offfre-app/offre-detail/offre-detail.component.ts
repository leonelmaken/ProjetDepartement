import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOffre } from '../../model/offre';
import { OffreService } from 'src/app/services/offre/offre.service';

@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styleUrls: ['./offre-detail.component.scss']
})
export class OffreDetailComponent {

  public offre: IOffre | undefined = <IOffre>{};

  public currentOffres: IOffre | undefined;

  public errMsg!: String;

  constructor(private offreService: OffreService,
    private route:ActivatedRoute,private router : Router) {}

  ngOnInit(): void {
    const ofId = Number(this.route.snapshot.paramMap.get("id"));

      this.offreService.getAll().subscribe({
          next: offrealites => {
              this.offre = offrealites.find(ent => ent.idOffre == ofId);
              this.currentOffres = this.offre;
              console.log("On Init..." + this.currentOffres);
          },
          error: err => this.errMsg = err
      }
      );

      console.log("On Init..." + ofId);
  }
public postuler(){

}

public recommander(){

}

public backToList(){
  this.router.navigate(['/offres']);
}
}
