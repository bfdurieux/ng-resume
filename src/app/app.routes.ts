import { Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ViewResumeComponent} from "./components/view-resume/view-resume.component";

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'view-resume', component: ViewResumeComponent },
];
