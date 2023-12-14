import { Routes } from '@angular/router';
import {MainViewComponent} from "./main-view/main-view.component";

export const routes: Routes = [
  { path: 'shows', component: MainViewComponent},
  { path: '', redirectTo: 'shows', pathMatch: 'full' },

];
