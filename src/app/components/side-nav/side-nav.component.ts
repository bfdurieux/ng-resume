import { Component } from '@angular/core';
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isOpen: boolean = false;
}
