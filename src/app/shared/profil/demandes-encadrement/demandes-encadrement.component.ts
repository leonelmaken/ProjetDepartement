import { Component } from "@angular/core";
import { GlobalVariables } from "../../global-variable";
import { IOffre } from "../../model/offre";


@Component({
  selector: 'app-demandes-encadrement',
  templateUrl: './demandes-encadrement.component.html',
  styleUrls: ['../articles/articles.component.css']
})
export class DemandesEncadrementComponent {


// ######################################################

  //Variable ou seront stockees les articles de l'utilisateur
  listDemandesEncadrement!: IOffre[];

  user: any = this.param.currentUserData;

  //On cree une instance du service HttpClient
  constructor(private param: GlobalVariables){ }

  //On recupere les donnees de l'enregistrement dans la base de donnees de notre API
  ngOnInit(){
    this.listDemandesEncadrement = this.param.currentUserData.demandes; //.find(*);
  }
}
