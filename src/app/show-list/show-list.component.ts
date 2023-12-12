import { Component } from '@angular/core';
import { Show} from "../model/show";
import {ShowDataService} from "../services/show-data.service";
import { NgFor} from "@angular/common";
import {ShowFormComponent} from "../show-form/show-form.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [NgFor, ShowFormComponent, FormsModule],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {
  editShow: Show;

  constructor(private service: ShowDataService){}

  get shows(): Show[]{
    return this.service.shows;
  }

  edit(show: Show){
    this.editShow = show;
  }

  toEdit(show: Show): boolean {
    if (!this.editShow) {
      return false;
    } else if (this.editShow !== show) {
      return false;
    } else {
      return true;
    }
  }

  saveEdit(){
    this.service.updateShow(this.editShow);
    this.editShow = null;
  }

  deleteShow(show: Show){
    this.service.deleteShow(show);
  }
}
