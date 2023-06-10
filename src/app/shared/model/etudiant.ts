import { IArticle } from "./article";
import { IProjet } from "./projet";

export interface IEtudiant {
    idUser: Number,
    nom: String,
    numTel: Number,
    mail: String,
    password: String,
    photo: File,
    roles: String,

    matricule: String,
    prenom: String,
    niveau: String,
    competence: String,

    projects: IProjet[],
    articles: IArticle[],
}
