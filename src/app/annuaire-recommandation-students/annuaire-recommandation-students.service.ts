import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IUser } from '../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class AnnuaireRecommandationStudentsService
  {

    private readonly STUDENT_API_URL = 'api/students.json';

    constructor(private http: HttpClient) { }


    public getstudents():Observable<IUser[]>{

      return this.http.get<IUser[]>(this.STUDENT_API_URL).pipe(
        tap(students => console.log('students:' , students)),
        catchError(this.handleError)
      );

    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occured:', error.error.message);
      } else {
        console.error(`Backend returned code ${error.status},` +
          `body was:${error.error}`);

      }

      return throwError('somethimg bad happened; try aigain later.');

    }


  }


