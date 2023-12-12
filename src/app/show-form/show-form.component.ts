import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";
import {ShowDataService} from "../services/show-data.service";
import {Show} from "../model/show";

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './show-form.component.html',
  styleUrl: './show-form.component.css'
})
export class ShowFormComponent {
  show: Show;
  constructor(private dataService: ShowDataService){
    this.show = new Show(null, null);
  }

  public save(){
    this.dataService.saveShow(this.show);
    this.show = new Show(null, null);
  }

}
