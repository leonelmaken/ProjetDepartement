import { Component, Input } from "@angular/core";
import { GlobalVariables } from "../../global-variable";

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['../articles/articles.component.css']
})
export class PropositionsComponent {

  @Input() typeProposition!: string;



// ######################################################

  //Variable ou seront stockees les articles de l'utilisateur
  listPropositions!: any[];

  //On cree une instance du service HttpClient
  constructor(private param: GlobalVariables){ }

  //On recupere les donnees de l'enregistrement dans la base de donnees de notre API
  ngOnInit(){
    this.listPropositions = this.param.currentUserData.demandes;
  }


}
