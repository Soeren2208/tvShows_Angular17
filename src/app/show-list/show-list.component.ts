import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Show} from "../model/show";
import {ShowDataService} from "../services/show-data.service";
import { NgFor} from "@angular/common";
import {ShowFormComponent} from "../show-form/show-form.component";
import {FormsModule} from "@angular/forms";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [ShowFormComponent, FormsModule],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {
  @Input() shows: Show[] =[];
  @Output() selectedShow = new EventEmitter<Show>();
  editShow: Show;

  constructor(private service: ShowDataService, private showDetailService: ApiService){}

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

    showDetails(show: Show){
    console.log('in showListComponent:: showDetails:: die übergebene Show:', show);
    this.selectedShow.emit(show);
    //this.showDetailService.setSelectectedShow(show);
  }
}
