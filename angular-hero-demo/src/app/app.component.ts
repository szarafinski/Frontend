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
    //this.heroes = this.heroService.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes()  {
    this.heroes = this.heroService.getHeroes();
  }

   ngOnInit() {
     this.getHeroes();
  }
}




