import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-view-resume',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './view-resume.component.html',
  styleUrl: './view-resume.component.scss'
})
export class ViewResumeComponent {

}
