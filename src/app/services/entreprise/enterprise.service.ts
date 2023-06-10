import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IEnterprise } from 'src/app/shared/model/enterprise';
import { IEtudiant } from 'src/app/shared/model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

    private readonly API_URL = "http://localhost:8080/Entreprise";

    private readonly ENDPOINT_READ = "/read";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_DELETE = "/delete";

    private readonly ENDPOINT_UPDATE = "/update";

    private readonly ENDPOINT_ADD = "/add";

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<IEnterprise[]> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.get<IEnterprise[]> (this.API_URL+this.ENDPOINT_READ);
    }

    getById(id: Number): Observable<IEnterprise> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.get<IEnterprise> (this.API_URL+this.ENDPOINT_READ+'/'+id);
    }

    getByName(name: String): Observable<IEnterprise> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.get<IEnterprise> (this.API_URL+this.ENDPOINT_READ+'/name/'+name);
    }

    getByLocality(locality: String): Observable<IEnterprise> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.get<IEnterprise> (this.API_URL+this.ENDPOINT_READ+'/locality/'+locality);
    }

    getParraines(id: Number): Observable<IEnterprise> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.get<IEnterprise> (this.API_URL+this.ENDPOINT_READ+'/'+id+'/parraine');
    }

    addParraines(id: Number, etudiant: IEtudiant): Observable<IEnterprise> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.put<IEnterprise> (this.API_URL+this.ENDPOINT_ADD+'/'+id+'/parraine', etudiant);
    }

    getStagiaires(id: Number): Observable<IEnterprise> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.get<IEnterprise> (this.API_URL+this.ENDPOINT_READ+'/'+id+'/stagiaire');
    }

    addStagiaires(id: Number, etudiant: IEtudiant): Observable<IEnterprise> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.put<IEnterprise> (this.API_URL+this.ENDPOINT_ADD+'/'+id+'/stagiaire', etudiant);
    }

    create(enterprise: IEnterprise): Observable<IEnterprise> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.post<IEnterprise>(this.API_URL+this.ENDPOINT_CREATE, enterprise);
    }

    update(id: Number, enterprise: IEnterprise): Observable<IEnterprise> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.put<IEnterprise>(this.API_URL+this.ENDPOINT_UPDATE+'/'+id, enterprise);
    }

    delete(id: Number): Observable<IEnterprise> {
        tap( enterprise => console.log("Enterprise", enterprise)),
        catchError(this.handleError);
        return this.httpClient.delete<IEnterprise>(this.API_URL+this.ENDPOINT_DELETE+'/'+id);
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
