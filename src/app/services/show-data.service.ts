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

  saveShow(newShow: Show){
    this.shows.push(newShow);
  }

  updateShow(show: Show){
    this.shows= this.shows.filter(s => show!==s);
    this.shows.push(show);
    this.shows.sort((a, b)=> a.id - b.id);
  }

  deleteShow(show: Show){
    this.shows = this.shows.filter(s => show!== s);
  }

}
