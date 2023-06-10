import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IUser } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    //private readonly API_URL = "api/company.json";
    private readonly API_URL = "http://localhost:8080/User";

    private readonly ENDPOINT_READ = "/read";

    private readonly ENDPOINT_DELETE = "/delete";

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<IUser[]> {
        tap( user => console.log("User", user)),
        catchError(this.handleError);
        return this.httpClient.get<IUser[]> (this.API_URL+this.ENDPOINT_READ);
    }

    getById(id: Number): Observable<IUser> {
        tap( user => console.log("User", user)),
        catchError(this.handleError);
        return this.httpClient.get<IUser> (this.API_URL+this.ENDPOINT_READ+'/'+id);
    }

    getByName(name: String): Observable<IUser> {
        tap( user => console.log("User", user)),
        catchError(this.handleError);
        return this.httpClient.get<IUser> (this.API_URL+this.ENDPOINT_READ+'/name/'+name);
    }

    getByMail(mail: String): Observable<IUser> {
        tap( user => console.log("User", user)),
        catchError(this.handleError);
        return this.httpClient.get<IUser> (this.API_URL+this.ENDPOINT_READ+'/mail/'+mail);
    }

    delete(id: Number): Observable<IUser> {
        tap( user => console.log("User", user)),
        catchError(this.handleError);
        return this.httpClient.delete<IUser>(this.API_URL+this.ENDPOINT_DELETE+'/'+id);
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
