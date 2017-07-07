import { Component, Input, OnInit }       from '@angular/core';
import { Router }                         from '@angular/router';

import { Observable }                     from 'rxjs/Observable';
import { Subject }                        from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero }                           from '../../model/hero';
import { HeroSearchService }              from '../../service/hero-search.service';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroes = this.searchTerms
      .debounceTime(300) //wait 300ms after each keystroke before considering the term
      .distinctUntilChanged() //ignore if search term is unchanged
      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([])) //results of prior calls are discarded
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goToDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
