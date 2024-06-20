import {Component, Input} from '@angular/core';
import {CarouselCard} from "../../models/carousel-card";
import {Utils} from "../../Utils/utils";
import {AnchorComponent} from "../anchor/anchor.component";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    AnchorComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() cards: CarouselCard[] = [];

  protected readonly Utils = Utils;
}
