import {Component, Input, signal, computed} from '@angular/core';
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
  @Input() cards = signal<CarouselCard[]>([]);
  protected readonly Utils = Utils;
  position = signal<number>(0);
  display = computed(() => {
    return this.cards().slice(this.position(), this.position() + 3)
  });


  moveLeft() {
    let pos = this.position();
    if (pos - 3 < 0)
      return;

    this.position.set(pos - 3);
  }

  moveRight() {
    let pos = this.position();
    if (pos + 3 >= this.cards().length)
      return;

    this.position.set(pos + 3);
  }
}
