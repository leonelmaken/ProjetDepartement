import { Component, Input } from "@angular/core";
import { GlobalVariables } from "../../global-variable";

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['../articles/articles.component.css']
})
export class DemandesComponent {

  @Input() typeDemandes!: string;



// ######################################################

  //Variable ou seront stockees les articles de l'utilisateur
  listDemandes!: any[];
  user: any = this.param.currentUserData;

  //On cree une instance du service HttpClient
  constructor(private param: GlobalVariables){ }

  //On recupere les donnees de l'enregistrement dans la base de donnees de notre API
  ngOnInit(){
    this.listDemandes = this.param.currentUserData.demandes; //.find();
  }

}
