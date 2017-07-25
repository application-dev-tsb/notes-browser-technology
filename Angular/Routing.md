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
<a routerLink="/mypath" routerLinkActive="active">Heroes</a>
```
```html
<!-- Common Issue: The Root Path is always Active -->
<a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
```

## Programmatic Routing
Load page programatically
```typescript
import { Router, ActivatedRoute } from '@angular/router';

private router: Router;
private route: ActivatedRoute

this.router.navigate(['/hero', 1]); //navigates to /hero/1
this.router.navigate(['1']. {relativeTo: this.route}); //navigates to **current path**/1
```

## Route Parameters
Set and retrieve route parameters
```typescript
{ path: 'users/:id', component: UserDetailComponent }

//fetch the id the first time the component is loaded
ngOnInit() {
  const id = this.route.snapshot.params['id']; //good for first initialization

  //add this if you are expecting to reload the current component
  //this is an observable subscription to listen to path param "change"
  //DONT DO THIS IF: you are absolutely certain that this component can be loaded from the same component
  this.route.params().subscribe(
    (params: Params) => { //when the parameter changes
        const newId = params['id'];
    }, 
    () => { 

    },
    () => {}
  );
}

```

## Nested Routes
Routing with sub components

## Route Guards
Protect routes

## Async Routes
Lazy loading of components

###### Resources:
[Angular Guide](https://angular.io/guide/router)
