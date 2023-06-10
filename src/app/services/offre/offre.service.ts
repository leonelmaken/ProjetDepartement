import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IOffre } from 'src/app/shared/model/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

    private readonly API_URL = "http://localhost:8080/Offre";

    private readonly ENDPOINT_READ = "/read";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_DELETE = "/delete/";

    private readonly ENDPOINT_UPDATE = "/update/";

    constructor(private httpClient: HttpClient) { }

    public getAll(): Observable<IOffre[]> {
        tap( offre => console.log("Offre:", offre)),
        catchError(this.handleError);
        return this.httpClient.get<IOffre[]> (this.API_URL+this.ENDPOINT_READ);
    }

    public getById(id: Number): Observable<IOffre[]> {
        tap( offre => console.log("Offre:", offre)),
        catchError(this.handleError);
        return this.httpClient.get<IOffre[]> (this.API_URL+this.ENDPOINT_READ+'/'+id);
    }

    public getByPoste(poste: String): Observable<IOffre[]> {
        tap( offre => console.log("Offre:", offre)),
        catchError(this.handleError);
        return this.httpClient.get<IOffre[]> (this.API_URL+this.ENDPOINT_READ+'/poste/'+poste);
    }

    public getByCompetence(competence: String): Observable<IOffre[]> {
        tap( offre => console.log("Offre:", offre)),
        catchError(this.handleError);
        return this.httpClient.get<IOffre[]> (this.API_URL+this.ENDPOINT_READ+'/comp/'+competence);
    }

    public getByPeriod(period: String): Observable<IOffre[]> {
        tap( offre => console.log("Offre:", offre)),
        catchError(this.handleError);
        return this.httpClient.get<IOffre[]> (this.API_URL+this.ENDPOINT_READ+'/period/'+period);
    }

    public update(id: Number, offre: IOffre):  Observable<IOffre> {
        tap( offre => console.log("Offre", offre)),
        catchError(this.handleError);
        return this.httpClient.put<IOffre> (this.API_URL+this.ENDPOINT_UPDATE+id, offre);
    }

    public delete(id: Number):  Observable<IOffre> {
        tap( offre => console.log("Offre", offre)),
        catchError(this.handleError);
        return this.httpClient.delete<IOffre> (this.API_URL+this.ENDPOINT_DELETE+id);
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
