import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } 					from '../../model/hero';
import { HeroService } 				from  '../../service/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
  	private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  	//The switchMap operator maps the id in the Observable route parameters to a new Observable, the result of the HeroService.getHero() method.
    //If a user re-navigates to this component while a getHero request is still processing, switchMap cancels the old request and then calls HeroService.getHero() again.
    this.route.paramMap
      //switchMap = maps the params into an observable and auto-unsubscribes
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id'))) //converts the id to a number
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
