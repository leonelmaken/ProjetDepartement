import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IArticle } from 'src/app/shared/model/article';
import { IEtudiant } from 'src/app/shared/model/etudiant';
import { IProjet } from 'src/app/shared/model/projet';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

    private readonly API_URL = "http://localhost:8080/Etudiant";

    private readonly ENDPOINT_READ = "/read";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_DELETE = "/delete";

    private readonly ENDPOINT_UPDATE = "/update";

    private readonly ENDPOINT_ADD = "/add";

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<IEtudiant[]> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.get<IEtudiant[]> (this.API_URL+this.ENDPOINT_READ);
    }

    getById(id: Number): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.get<IEtudiant> (this.API_URL+this.ENDPOINT_READ+'/'+id);
    }

    getByName(name: String): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.get<IEtudiant> (this.API_URL+this.ENDPOINT_READ+'/name/'+name);
    }

    getBySurname(surname: String): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.get<IEtudiant> (this.API_URL+this.ENDPOINT_READ+'/surname/'+surname);
    }

    getByMatricule(mat: String): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.get<IEtudiant> (this.API_URL+this.ENDPOINT_READ+'/matricule/'+mat);
    }

    getByXpLang(comp: String): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.get<IEtudiant> (this.API_URL+this.ENDPOINT_READ+'/comp/'+comp);
    }

    getByLevel(level: String) {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.get<IEtudiant> (this.API_URL+this.ENDPOINT_READ+'/level/'+level);
    }

    addCompetence(id: Number, comp: String): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.put<IEtudiant> (this.API_URL+this.ENDPOINT_ADD+'/'+id, comp);
    }

    getArticles(id: Number): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.get<IEtudiant> (this.API_URL+this.ENDPOINT_READ+'/'+id+'/articles');
    }

    addArticles(id: Number, article: IArticle): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.put<IEtudiant> (this.API_URL+this.ENDPOINT_ADD+'/'+id+'/article', article);
    }

    getProjects(id: Number): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.get<IEtudiant> (this.API_URL+this.ENDPOINT_READ+'/'+id+'/projects');
    }

    addProjects(id: Number, project: IProjet): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.put<IEtudiant> (this.API_URL+this.ENDPOINT_ADD+'/'+id+'/project', project);
    }

    create(etudiant: IEtudiant): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.post<IEtudiant>(this.API_URL+this.ENDPOINT_CREATE, etudiant);
    }

    update(id: Number, etudiant: IEtudiant): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.put<IEtudiant>(this.API_URL+this.ENDPOINT_UPDATE+'/'+id, etudiant);
    }

    delete(id: Number): Observable<IEtudiant> {
        tap( etudiant => console.log("Etudiant", etudiant)),
        catchError(this.handleError);
        return this.httpClient.delete<IEtudiant>(this.API_URL+this.ENDPOINT_DELETE+'/'+id);
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error("An error has occured", error.error.message);
        } else {
            console.error(
                `Back error code: ${error.status}` ,
                `Error body: ${error.error}`
            );
        }
        return throwError('Try aigain later please');
    }
}
