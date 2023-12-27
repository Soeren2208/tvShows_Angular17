import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Show} from "../model/show";
import {ShowDTO} from "../model/showDTO";
import {catchError, map, Observable, Subject, tap, throwError} from "rxjs";

interface ErrorMessage{
  name: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://api.tvmaze.com";
  private detailShow$: Subject<Show | undefined> = new Subject<Show | undefined>();


  constructor(private httpClient: HttpClient) { }

  setSelectectedShow(show: Show): Observable<Show> {
    const apiUrl = `${this.baseUrl}/singlesearch/shows?q=${show.title}`
    console.log("in setSelectedShow")
    //Backticks verwenden, um sicherzustellen, dass die Ausdrücke innerhalb der ${...}`-Notation ausgewertet werden.
    return this.httpClient.get<ShowDTO>(apiUrl).pipe(
      catchError (this.handleError),
      tap((s) => {
        show.summary = s.summary;
        show.image = s.image?.medium;
        this.detailShow$.next(show);
        return this.detailShow$;
      }),
      map(() => show)
    );
  }

  get detailShow(): Observable<Show |undefined>{
    return this.detailShow$;
  }

  private handleError(error: any): Observable<any> {
    console.log('apiService::handleError: ', error);
    this.detailShow$.next(undefined);// Set the detailShow$ to undefined on error
    let errorMessage: ErrorMessage ={} as ErrorMessage;
    if(error instanceof HttpErrorResponse) {
      errorMessage = {
        name: error.name,
        message: error.message,
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
