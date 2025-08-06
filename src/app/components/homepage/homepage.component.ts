import { Component, signal } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import {HomeInfoComponent} from "../home-info/home-info.component";
import {CarouselCard} from "../../models/carousel-card";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CarouselComponent, HomeInfoComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  cards = signal<CarouselCard[]>([
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
    },
    {
      title: 'IsNullOrEmpty',
      description: 'NPM library for isNullOrEmpty method',
      hostingLink: 'https://www.npmjs.com/package/@bfdurieux/isnullorempty',
      repoLink: 'https://github.com/bfdurieux/isnullorempty'
    },
    {
      title: 'Array Utils',
      description: 'NPM library for Array Utils methods',
      hostingLink: 'https://www.npmjs.com/package/@bfdurieux/array-utils',
      repoLink: 'https://github.com/bfdurieux/array-utils'
    },
    {
      title: 'NgResume',
      description: `This portfolio website you're currently looking at!`,
      hostingLink: 'https://bfdurieux.github.io/ng-resume/',
      repoLink: 'https://github.com/bfdurieux/ng-resume'
    }

  ])
}
