import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import { ApiService} from "../services/api.service";
import {Show} from "../model/show";
import {BehaviorSubject, catchError, EMPTY, Observable, of, Subject} from "rxjs";

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {
  @Input() detailShow$: BehaviorSubject<Show>;
  public errorMessage$: Subject<string> = new Subject<string>();

  constructor() {
  }
}
