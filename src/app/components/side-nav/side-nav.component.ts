import {Component, computed, Signal} from '@angular/core';
import {IconComponent} from "../icon/icon.component";
import {animate, AUTO_STYLE, state, style, transition, trigger} from "@angular/animations";
import {NgClass} from "@angular/common";
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {filter} from "rxjs";

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    IconComponent,
    NgClass,
    RouterLink,
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
  emailScript: string = "https://mail.google.com/mail/?view=cm&fs=1&to=bfdurieux@gmail.com";
  isHome: Signal<boolean>;
  route: Signal<any>;
  themes: string[] = ['light', 'dark', 'green-light', 'green-dark', 'blue-dark', 'blue-light', 'orange-light'];

  constructor(private router: Router) {
    this.route = toSignal(router.events.pipe(filter(event => event instanceof NavigationEnd)));
    this.isHome = computed(() => { return this.route().url === '/'});
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  switchTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    let index = this.themes.findIndex(t => t === theme);
    index++;
    index = this.themes.length === index ? 0 : index;
    document.documentElement.setAttribute('data-theme', this.themes[index]);
  }
}
