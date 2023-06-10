import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IProjet } from 'src/app/shared/model/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

    private readonly API_URL = "http://localhost:8080/Projet";

    private readonly ENDPOINT_READ = "/read";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_DELETE = "/delete/";

    private readonly ENDPOINT_UPDATE = "/update/";

    constructor(private httpClient: HttpClient) { }

    public getAll(): Observable<IProjet[]> {
        tap( projet => console.log("Projet:", projet)),
        catchError(this.handleError);
        return this.httpClient.get<IProjet[]> (this.API_URL+this.ENDPOINT_READ);
    }

    public getById(id: Number): Observable<IProjet[]> {
        tap( projet => console.log("Projet:", projet)),
        catchError(this.handleError);
        return this.httpClient.get<IProjet[]> (this.API_URL+this.ENDPOINT_READ+'/'+id);
    }

    public getByTheme(theme: String): Observable<IProjet[]> {
        tap( projet => console.log("Projet:", projet)),
        catchError(this.handleError);
        return this.httpClient.get<IProjet[]> (this.API_URL+this.ENDPOINT_READ+'/theme/'+theme);
    }

    public create(project: IProjet):  Observable<IProjet> {
        tap( projet => console.log("Projet", projet)),
        catchError(this.handleError);
        return this.httpClient.post<IProjet> (this.API_URL+this.ENDPOINT_CREATE, project);
    }

    public update(id: Number, project: IProjet):  Observable<IProjet> {
        tap( projet => console.log("Projet", projet)),
        catchError(this.handleError);
        return this.httpClient.put<IProjet> (this.API_URL+this.ENDPOINT_UPDATE+id, project);
    }

    public delete(id: Number):  Observable<IProjet> {
        tap( projet => console.log("Projet", projet)),
        catchError(this.handleError);
        return this.httpClient.delete<IProjet> (this.API_URL+this.ENDPOINT_DELETE+id);
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
