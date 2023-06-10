import { Component } from "@angular/core";
import { GlobalVariables } from "../../global-variable";


@Component({
  selector: 'app-vue-generale',
  templateUrl: './vue-generale.component.html',
  styleUrls: ['./vue-generale.component.css']
})
export class VueGeneraleComponent {


// ######################################################

  //Variable ou seront stockees les articles de l'utilisateur
  donneesUtilisateur!: any;

  //On cree une instance du service HttpClient
  constructor(private param: GlobalVariables){ }

  //On recupere les donnees de l'enregistrement dans la base de donnees de notre API
  ngOnInit(){
    this.donneesUtilisateur = this.param.currentUserData;
  }

}
