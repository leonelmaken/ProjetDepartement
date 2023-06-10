import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IEnseignant } from 'src/app/shared/model/enseignant';
import { IArticle } from 'src/app/shared/model/article';
import { IProjet } from 'src/app/shared/model/projet';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

    private readonly API_URL = "http://localhost:8080/Enseignant";

    private readonly ENDPOINT_READ = "/read";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_DELETE = "/delete";

    private readonly ENDPOINT_UPDATE = "/update";

    private readonly ENDPOINT_ADD = "/add";

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<IEnseignant[]> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant[]> (this.API_URL+this.ENDPOINT_READ);
    }

    getById(id: Number): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant> (this.API_URL+this.ENDPOINT_READ+'/'+id);
    }

    getByName(name: String): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant> (this.API_URL+this.ENDPOINT_READ+'/name/'+name);
    }

    getBySurname(surname: String): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant> (this.API_URL+this.ENDPOINT_READ+'/surname/'+surname);
    }

    getByMatricule(mat: String): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant> (this.API_URL+this.ENDPOINT_READ+'/matricule/'+mat);
    }

    getByCompetence(comp: String): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant> (this.API_URL+this.ENDPOINT_READ+'/comp/'+comp);
    }

    getBySpeciality(comp: String): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant> (this.API_URL+this.ENDPOINT_READ+'/special/'+comp);
    }

    addCompetence(id: Number, comp: String): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.put<IEnseignant> (this.API_URL+this.ENDPOINT_ADD+'/'+id, comp);
    }

    getArticles(id: Number): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant> (this.API_URL+this.ENDPOINT_READ+'/'+id+'/articles');
    }

    addArticles(id: Number, article: IArticle): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.put<IEnseignant> (this.API_URL+this.ENDPOINT_ADD+'/'+id+'/article', article);
    }

    getProjects(id: Number): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant> (this.API_URL+this.ENDPOINT_READ+'/'+id+'/projects');
    }

    addProjects(id: Number, project: IProjet): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.put<IEnseignant> (this.API_URL+this.ENDPOINT_ADD+'/'+id+'/project', project);
    }

    create(enseignant: IEnseignant): Observable<IEnseignant> {
        tap( enseignant => console.log("enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.post<IEnseignant>(this.API_URL+this.ENDPOINT_CREATE, enseignant);
    }

    update(id: Number, enseignant: IEnseignant): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.put<IEnseignant>(this.API_URL+this.ENDPOINT_UPDATE+'/'+id, enseignant);
    }

    delete(id: Number): Observable<IEnseignant> {
        tap( enseignant => console.log("Enseignant", enseignant)),
        catchError(this.handleError);
        return this.httpClient.delete<IEnseignant>(this.API_URL+this.ENDPOINT_DELETE+'/'+id);
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
