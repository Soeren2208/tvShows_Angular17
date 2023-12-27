import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import { ApiService} from "../services/api.service";
import {Show} from "../model/show";
import {catchError, EMPTY, Observable, of, Subject} from "rxjs";

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent implements OnInit {
  //detailShow: Show;
  //@Input()
  detailShow: Show;
  public errorMessage$: Subject<string> = new Subject<string>();

  //apiError: boolean = false;

  constructor(private detailService: ApiService) {
    //this.detailService.detailShow.subscribe(show =>{
    //  this.detailShow = show;
    //});
  }

  ngOnInit(): void {
    this.detailService.detailShow.pipe(
      catchError((error: any) => {
        const errorMessage = `${error.name}: ${error.message}`;
        this.errorMessage$.next(errorMessage);
        console.log('mein Fehler');
        return EMPTY; //leeres Observable
      })
    ).subscribe((s: Show) =>{
      this.detailShow = s;
    });
  }
}
