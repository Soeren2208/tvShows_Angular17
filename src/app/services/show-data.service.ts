import { Injectable } from '@angular/core';
import {Show} from "../model/show";

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {
  shows: Show[] = [];

  constructor() {
    this.shows.push(new Show(1, 'Vikings'));
    this.shows.push(new Show(2, 'Friends'));
    this.shows.push(new Show(3, 'Downton Abbey'));
    this.shows.push(new Show(4, 'The Witcher'));
  }

  public saveShow(newShow: Show){
    this.shows.push(newShow);
  }
}
