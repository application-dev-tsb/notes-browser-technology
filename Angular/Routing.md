# Routing

## Routing Basics
```typescript
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
```
```html
<router-outlet></router-outlet>
```

## Links
Adding links and styling
```html
<a routerLink="/mypath">click me</a>
```

## Programmatic Routing
Load page programatically

## Route Parameters
Set and retrieve route parameters

## Nested Routes
Routing with sub components

## Route Guards
Protect routes

## Async Routes
Lazy loading of components

###### Resources:
[Angular Guide](https://angular.io/guide/router)
