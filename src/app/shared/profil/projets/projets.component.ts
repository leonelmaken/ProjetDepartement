import { Component, Input } from '@angular/core';
import { IProjet } from '../../model/projet';
import { GlobalVariables } from '../../global-variable';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['../articles/articles.component.css']
})
export class ProjetsComponent {

  @Input() typeProjet!: string;



// ######################################################

  //Variable ou seront stockees les articles de l'utilisateur
  listProjet!: IProjet[];

  //On cree une instance du service HttpClient
  constructor(private param: GlobalVariables){ }

  //On recupere les donnees de l'enregistrement dans la base de donnees de notre API
  ngOnInit(){
    this.listProjet = this.param.currentUserData.projects;
  }





}
