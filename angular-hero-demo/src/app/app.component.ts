import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes()  {
    //this.heroService.getHeroes().then(heroes => {this.heroes=heroes});
    this.heroService.getHeroesSlowly().then(heroes => {this.heroes=heroes});
  }

   ngOnInit() {
     this.getHeroes();
  }
}




