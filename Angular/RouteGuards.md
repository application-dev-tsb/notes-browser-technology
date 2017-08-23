# Route Guards

###### Guard Implementation
```typescript
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
  }
}
```

###### Wire Guard to Routes
```typescript
//module for app routes

const appRoutes: Routes = [
  {
    path: '', 
    component: XComponent,
    canActivate: AuthGuard
  }
];
```
