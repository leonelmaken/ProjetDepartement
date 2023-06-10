import { IEnterprise } from "./enterprise";
import { IEtudiant } from "./etudiant";

export interface IEmploi {
    idOffre: Number,
    poste: string,
	description: String,
	periode: String,
	competences: String,
    etat: Boolean,
    type: string,

    secteur: String,
    employeur: IEnterprise,
    employe: IEtudiant,
}
