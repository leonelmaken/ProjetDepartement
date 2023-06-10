import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IPublication } from 'src/app/shared/model/publication';

@Injectable({
  providedIn: 'root'
})
export class ActualitesService {

    private readonly API_URL = "http://localhost:8080/Publication";

    private readonly ENDPOINT_READ = "/read";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_DELETE = "/delete/:id";

    private readonly ENDPOINT_UPDATE = "/update/:id";

    constructor(private httpClient: HttpClient) { }

    public getAll(): Observable<IPublication[]> {
        tap( actu => console.log("Actu:", actu)),
        catchError(this.handleError);
        return this.httpClient.get<IPublication[]> (this.API_URL+this.ENDPOINT_READ);
    }

    public getById(id: Number): Observable<IPublication[]> {
        tap( actu => console.log("Actu:", actu)),
        catchError(this.handleError);
        return this.httpClient.get<IPublication[]> (this.API_URL+this.ENDPOINT_READ+'/'+id);
    }

    public getByTitle(title: String): Observable<IPublication[]> {
        tap( actu => console.log("Actu:", actu)),
        catchError(this.handleError);
        return this.httpClient.get<IPublication[]> (this.API_URL+this.ENDPOINT_READ+'/title/'+title);
    }

    public getByDescription(desc: String): Observable<IPublication[]> {
        tap( actu => console.log("Actu:", actu)),
        catchError(this.handleError);
        return this.httpClient.get<IPublication[]> (this.API_URL+this.ENDPOINT_READ+'/desc/'+desc);
    }

    public update(id: Number, actu: IPublication):  Observable<IPublication> {
        tap( actu => console.log("Actu", actu)),
        catchError(this.handleError);
        return this.httpClient.put<IPublication> (this.API_URL+this.ENDPOINT_UPDATE+id, actu);
    }

    public delete(id: Number):  Observable<IPublication> {
        tap( actu => console.log("Actu", actu)),
        catchError(this.handleError);
        return this.httpClient.delete<IPublication> (this.API_URL+this.ENDPOINT_DELETE+id);
    }

    public create(pub: IPublication):  Observable<IPublication> {
        tap( publication => console.log("Publication", publication)),
        catchError(this.handleError);
        return this.httpClient.post<IPublication> (this.API_URL+this.ENDPOINT_CREATE, pub);
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
