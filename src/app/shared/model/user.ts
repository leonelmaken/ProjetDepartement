import { IArticle } from "./article";
import { IEtudiant } from "./etudiant";
import { IOffre } from "./offre";
import { IProjet } from "./projet";

export interface IUser{
    idUser: Number,
    nom: String,
    numTel: Number,
    mail: string,
    password: string,
    photo: File,
    roles:string,

    niveau: String,

    matricule: String,
    prenom: String,
    grade: String,
    specialite: String,
    competence: String,

    projects: IProjet[],
    articles: IArticle[],
    encadrees: IEtudiant[],
    recommandes: IEtudiant[],

    contributeNumber: Number,
    location: String,
    webSite: String,
    creationDate: Date,

    parraines: IEtudiant[],
    stagiaires: IEtudiant[],
    employes: IEtudiant[],
    infoSup: String,

    demandes: any,

}
