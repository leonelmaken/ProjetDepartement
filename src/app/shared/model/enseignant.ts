import { IArticle } from "./article";
import { IEtudiant } from "./etudiant";
import { IProjet } from "./projet";

export interface IEnseignant {
    idUser: Number,
    nom: String,
    numTel: Number,
    mail: String,
    password: String,
    photo: File,
    roles: String,

    matricule: String,
    prenom: String,
    grade: String,
    specialite: String,
    competence: String,
    competences: String,

    projects: IProjet[],
    articles: IArticle[],
    encadrees: IEtudiant[],
    recommandes: IEtudiant[],
}
