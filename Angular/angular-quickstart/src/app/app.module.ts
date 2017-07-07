import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { NgModule }             from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock/in-memory-data.service';

import { RoutingModule }        from './routing.module';

import { HeroService }          from './service/hero.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './component/dashboard/dashboard.component';
import { HeroDetailComponent }  from './component/hero-detail/hero-detail.component';
import { HeroesComponent }      from './component/heroes/heroes.component';
import { HeroSearchComponent }  from './component/hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,

    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    InMemoryWebApiModule.forRoot(InMemoryDataService),

    RoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
