import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Hero } from '../../model/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  @Output()
  selectedHero = new EventEmitter<Hero>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    console.log("selected: " + hero);
  	this.selectedHero.emit(hero);
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

}
