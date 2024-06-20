import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import {HomeInfoComponent} from "../home-info/home-info.component";
import {CarouselCard} from "../../models/carousel-card";
import {FooterComponent} from "../footer/footer.component";
import {SideNavComponent} from "../side-nav/side-nav.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CarouselComponent, HomeInfoComponent, FooterComponent, SideNavComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  cards: CarouselCard[] = [
    {
      title: 'Tarot Reader',
      description: 'Look into the future with this multi-deck Tarot card reading app',
      hostingLink: 'https://bfdurieux.github.io/ng-tarot-reader/home',
      repoLink: 'https://github.com/bfdurieux/ng-tarot-reader'
    },
    {
      title: 'Interval Trainer',
      description: 'Memorize music intervals',
      hostingLink: 'https://bfdurieux.github.io/interval-trainer/',
      repoLink: 'https://github.com/bfdurieux/interval-trainer'
    },
    {
      title: 'ngFilms',
      description: 'List of the top movies from IMDB, one of my earliest portfolio projects',
      hostingLink: 'https://bfdurieux.github.io/ngFilmes/home',
      repoLink: 'https://bfdurieux.github.io/ngFilmes/home'
    }
  ]
}
