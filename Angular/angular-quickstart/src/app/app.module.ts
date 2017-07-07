import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { NgModule }             from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock/in-memory-data.service';

import { AppRoutesModule }      from './app.routes.module';

import { HeroService }          from './service/hero.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './component/dashboard/dashboard.component';
import { HeroDetailComponent }  from './component/hero-detail/hero-detail.component';
import { HeroesComponent }      from './component/heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    InMemoryWebApiModule.forRoot(InMemoryDataService),

    AppRoutesModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
