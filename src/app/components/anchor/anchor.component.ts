import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [],
  templateUrl: './anchor.component.html',
  styleUrl: './anchor.component.scss'
})
export class AnchorComponent {
  @Input() href: string = '';
}
