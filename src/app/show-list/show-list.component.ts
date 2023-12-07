import { Component } from '@angular/core';
import { Show} from "../model/show";
import {ShowDataService} from "../services/show-data.service";
import { NgFor} from "@angular/common";

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {

  constructor(private service: ShowDataService){}

  get shows(): Show[]{
    return this.service.shows;
  }

}
