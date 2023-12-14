import { Component } from '@angular/core';
import {ShowFormComponent} from "../show-form/show-form.component";
import {ShowListComponent} from "../show-list/show-list.component";
import {ShowDetailsComponent} from "../show-details/show-details.component";
import {ShowDetailService} from "../services/show-detail.service";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    ShowListComponent, ShowFormComponent, ShowDetailsComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  constructor(private service: ShowDetailService){

  }

  get detailShow(){
    return this.service.detailShow;
  }

}
