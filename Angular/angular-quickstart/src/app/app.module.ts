import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroesComponent } from './component/heroes/heroes.component';

import { HeroService } from './service/hero.service';

import { ROUTER_DEFINITIONS } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTER_DEFINITIONS)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
