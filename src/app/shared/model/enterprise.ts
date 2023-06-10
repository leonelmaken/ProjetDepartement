import { IEtudiant } from "./etudiant";

export interface IEnterprise {
    idUser: Number,
    nom: String,
    numTel: Number,
    mail: String,
    password: String,
    photo: File,
    roles: String,

    contributeNumber: Number,
    location: String,
    webSite: String,
    creationDate: Date,

    parraines: IEtudiant[],
    stagiaires: IEtudiant[],
    employes: IEtudiant[],
    infoSup: String,
}
