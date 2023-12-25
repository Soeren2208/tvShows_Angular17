import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import { ApiService} from "../services/api.service";
import {Show} from "../model/show";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent implements OnInit{
  //detailShow: Show;
  //@Input()
  detailShow$: Observable<Show>;

  constructor(private detailService: ApiService) {
    //this.detailService.detailShow.subscribe(show =>{
    //  this.detailShow = show;
    //});
  }

  ngOnInit(): void {
    this.detailShow$ = this.detailService.detailShow;
  }
 }
