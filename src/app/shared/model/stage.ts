import { IEnterprise } from "./enterprise"
import { IEtudiant } from "./etudiant"

export interface IStage {

    idOffre: Number
    poste: string,
    description: string,
    periode: string,
    competences: string
    etat: string,
    type: string,

    employeur: IEnterprise,
    employe: IEtudiant,

    idStage: Number,
    competencesAttendues: String,
    nameAuteur: String,
    image: String,
}
