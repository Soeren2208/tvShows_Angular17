import { Component } from '@angular/core';
import {ShowFormComponent} from "../show-form/show-form.component";
import {ShowListComponent} from "../show-list/show-list.component";
import {ShowDetailsComponent} from "../show-details/show-details.component";
import {ApiService} from "../services/api.service";
import {Show} from "../model/show";
import {NgIf} from "@angular/common";
import {Observable} from "rxjs";

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
  isShowSelected = false;
  selectedShow: Show;
  constructor(private service: ApiService){

  }

  onSelectedShow(show: Show){
    console.log(show);
    this.service.setSelectectedShow(show).subscribe();
    this.isShowSelected = true;
    console.log(this.isShowSelected);
    //this.service.detailShow.subscribe((s: Show) => {
      //this.selectedShow=s;
    //});
  }
}
