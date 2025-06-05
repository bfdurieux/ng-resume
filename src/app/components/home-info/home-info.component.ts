import { Component } from '@angular/core';
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-home-info',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './home-info.component.html',
  styleUrl: './home-info.component.scss'
})
export class HomeInfoComponent {

}
