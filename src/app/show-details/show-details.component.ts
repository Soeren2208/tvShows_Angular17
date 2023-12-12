import { Component } from '@angular/core';
import { ShowDetailService} from "../services/show-detail.service";
import {Show} from "../model/show";
import {async, Observable} from "rxjs";

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {
  show!: Show;

  constructor(private detailService: ShowDetailService) {
  }

  get detailShow(): Show{
    return this.detailService.detailShow;
  }


}
