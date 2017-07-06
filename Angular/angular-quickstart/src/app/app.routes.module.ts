import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } 	from './component/hero-detail/hero-detail.component';
import { HeroesComponent } 		from './component/heroes/heroes.component';
import { DashboardComponent } 	from './component/dashboard/dashboard.component';

const ROUTER_DEFINITIONS = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: 'heroes', component: HeroesComponent }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTER_DEFINITIONS) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule {}