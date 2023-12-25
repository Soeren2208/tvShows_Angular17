import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Show} from "../model/show";
import {Observable} from "rxjs";
import {ShowDTO} from "../model/showDTO";

@Injectable({
  providedIn: 'root'
})
export class ShowDetailService {
  detailShow: Show=null;

  constructor(private httpClient: HttpClient) { }

  getShowDetails(title: string): void{
    this.detailShow= new Show(null, title);
    this.httpClient.get<ShowDTO>('http://api.tvmaze.com/singlesearch/shows?q=' + title).subscribe(s => {
      this.detailShow.summary = s.summary;
      this.detailShow.image = s.image.medium;
    });
    console.log(this.detailShow);
  }
}
