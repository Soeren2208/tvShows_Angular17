import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Show} from "../model/show";
import {ShowDTO} from "../model/showDTO";
import {catchError, map, Observable, tap, throwError} from "rxjs";

interface ErrorMessage{
  name: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://api.tvmaze.com";

  constructor(private httpClient: HttpClient) { }

  getDetailShow(title: string): Observable<Show>{
    const apiUrl = `${this.baseUrl}/singlesearch/shows?q=${title}`;
    let show: Show = new Show(0, title);
    return this.httpClient.get<ShowDTO>(apiUrl).pipe(
      catchError(this.handleError),
      map((s) => {
        show.summary = s.summary;
        show.image = s.image?.medium;
        return show;
      })
    );
  }

  private handleError(error: any): Observable<any> {
    let errorMessage: ErrorMessage ={} as ErrorMessage;
    if(error instanceof HttpErrorResponse) {
      errorMessage = {
        name: error.name,
        message: 'Die Serie konnte nicht geladen werden!'
      };
    }else{
      errorMessage = {
        name: 'Unknown Error',
        message: error.body.error,
      } ;
    }
    return throwError(() => errorMessage);
  }
}
