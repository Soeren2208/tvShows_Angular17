import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Show} from "../model/show";
import {ShowDTO} from "../model/showDTO";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://api.tvmaze.com";
  private detailShow$: Subject<Show> = new Subject<Show | undefined>();


  constructor(private httpClient: HttpClient) { }

  setSelectectedShow(show: Show) {
    const apiUrl = `${this.baseUrl}/singlesearch/shows?q=${show.title}`;
    //Backticks verwenden, um sicherzustellen, dass die Ausdrücke innerhalb der ${...}`-Notation ausgewertet werden.
    this.httpClient.get<ShowDTO>(apiUrl).subscribe({
      next: (s) => {
        show.summary = s.summary;
        show.image = s.image?.medium; // Optional chaining to avoid null/undefined errors
        this.detailShow$.next(show);
      }
    });
  }

  get detailShow(): Observable<Show |undefined>{
    return this.detailShow$;
  }


}
