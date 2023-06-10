import { Component } from "@angular/core";
import { GlobalVariables } from "../../global-variable";
import { IArticle } from "../../model/article";
import { IUser } from "../../model/user";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {


  // ######################################################

  //Variable ou seront stockees les articles de l'utilisateur
  listArticle!: IArticle[];

  user: IUser = this.param.currentUserData;

  //On cree une instance du service HttpClient
  constructor(private param: GlobalVariables){ }

  //On recupere les donnees de l'enregistrement dans la base de donnees de notre API
  ngOnInit(){
    this.listArticle = this.param.currentUserData.articles;
  }




}
