import { Component } from '@angular/core';
import {IconComponent} from "../icon/icon.component";
import {animate, AUTO_STYLE, state, style, transition, trigger} from "@angular/animations";
import {NgClass} from "@angular/common";

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    IconComponent,
    NgClass
  ],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isOpen: boolean = false;
  githubURL: string = "https://github.com/bfdurieux";
  linkedinURL: string = "https://www.linkedin.com/in/bruno-durieux-266474190/";

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
