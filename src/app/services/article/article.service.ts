import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IArticle } from 'src/app/shared/model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

    private readonly API_URL = "http://localhost:8080/Article";

    private readonly ENDPOINT_READ = "/read";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_DELETE = "/delete/";

    private readonly ENDPOINT_UPDATE = "/update/";

    constructor(private httpClient: HttpClient) { }

    public getAll(): Observable<IArticle[]> {
        tap( article => console.log("Article:", article)),
        catchError(this.handleError);
        return this.httpClient.get<IArticle[]> (this.API_URL+this.ENDPOINT_READ);
    }

    public getById(id: Number): Observable<IArticle[]> {
        tap( article => console.log("Article:", article)),
        catchError(this.handleError);
        return this.httpClient.get<IArticle[]> (this.API_URL+this.ENDPOINT_READ+'/'+id);
    }

    public getByTheme(theme: String): Observable<IArticle[]> {
        tap( article => console.log("Article:", article)),
        catchError(this.handleError);
        return this.httpClient.get<IArticle[]> (this.API_URL+this.ENDPOINT_READ+'/theme/'+theme);
    }

    public getByAuthorName(name: String): Observable<IArticle[]> {
        tap( article => console.log("Article:", article)),
        catchError(this.handleError);
        return this.httpClient.get<IArticle[]> (this.API_URL+this.ENDPOINT_READ+'/name/'+name);
    }

    public getByDescription(desc: String): Observable<IArticle[]> {
        tap( article => console.log("Article:", article)),
        catchError(this.handleError);
        return this.httpClient.get<IArticle[]> (this.API_URL+this.ENDPOINT_READ+'/desc/'+desc);
    }

    public create(project: IArticle):  Observable<IArticle> {
        tap( article => console.log("Article", article)),
        catchError(this.handleError);
        return this.httpClient.post<IArticle> (this.API_URL+this.ENDPOINT_CREATE, project);
    }

    public update(id: Number, project: IArticle):  Observable<IArticle> {
        tap( article => console.log("Article", article)),
        catchError(this.handleError);
        return this.httpClient.put<IArticle> (this.API_URL+this.ENDPOINT_UPDATE+id, project);
    }

    public delete(id: Number):  Observable<IArticle> {
        tap( article => console.log("Article", article)),
        catchError(this.handleError);
        return this.httpClient.delete<IArticle> (this.API_URL+this.ENDPOINT_DELETE+id);
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
