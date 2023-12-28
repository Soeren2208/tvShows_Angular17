import { Component } from '@angular/core';
import {ShowFormComponent} from "../show-form/show-form.component";
import {ShowListComponent} from "../show-list/show-list.component";
import {ShowDetailsComponent} from "../show-details/show-details.component";
import {ApiService} from "../services/api.service";
import {Show} from "../model/show";
import {NgIf} from "@angular/common";
import {BehaviorSubject, Observable} from "rxjs";
import {ShowDataService} from "../services/show-data.service";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    ShowListComponent, ShowFormComponent, ShowDetailsComponent, NgIf
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  selectedShow$: BehaviorSubject<Show>;
  isShowSelected = false;

  get shows(): Show[]{
    return this.dataService.shows;
  }

  constructor(private dataService: ShowDataService, private apiService: ApiService){
    this.selectedShow$ = new BehaviorSubject<Show>(null);
  }

  onSelectedShow(show: Show){
    this.apiService.getDetailShow(show.title).subscribe((s) =>{
      this.selectedShow$.next(s);
    });
    this.isShowSelected = true;
  }
}
