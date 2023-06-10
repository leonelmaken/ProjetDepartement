import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualitesService } from 'src/app/services/actualites/actualites.service';
import { IPublication } from 'src/app/shared/model/publication';

@Component({
  selector: 'app-actu-details',
  templateUrl: './actu-details.component.html',
  styleUrls: ['./actu-details.component.scss']
})
export class ActuDetailsComponent {

    public actu: IPublication | undefined = <IPublication>{};

    public currentActus: IPublication | undefined;

    public errMsg!: String;

    constructor(private actuService: ActualitesService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
      const entpID= Number(this.route.snapshot.paramMap.get("id"));

        this.actuService.getAll().subscribe({
            next: actualites => {
                this.actu = actualites.find(ent => ent.idPub == entpID);
                this.currentActus = this.actu;
            },
            error: err => this.errMsg = err
        }
        );

        console.log("On Init..." + entpID);
    }
    public backToList(){
      this.router.navigate(['/event']);
    }

}
