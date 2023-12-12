import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ShowListComponent} from "./show-list/show-list.component";
import {ShowFormComponent} from "./show-form/show-form.component";
import {ShowDetailsComponent} from "./show-details/show-details.component";
import {ShowDetailService} from "./services/show-detail.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ShowListComponent, ShowFormComponent, ShowDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tvShows';

  constructor(private service: ShowDetailService){

  }

  get detailShow(){
    return this.service.detailShow;
  }
}
