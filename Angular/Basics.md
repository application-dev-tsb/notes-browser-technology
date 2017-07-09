# Angular: Basic Concepts

## Directives
An Attribute directive changes the appearance or behavior of a DOM element.

#### Components
directives with a template.
```html
```

#### Structural directives
change the DOM layout by adding and removing DOM elements.
```html
<p *ngIf="booleanValue">Will only Show if property bounded is true</p>
```

#### Attribute directives
change the appearance or behavior of an element, component, or another directive.
```typescript
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
```
```html
<p myHighlight>Highlight me!</p>
```

## Service
```sh
ng g service service/hero
```
```typescript
//1. create a service
@Injectable() export class HeroService {}

//2. update app module
import { HeroService } from './service/hero.service';
providers: [HeroService]

//3. use dependency injection on the class requiring the service
constructor(private heroService: HeroService) { }
```

## Lifecycle Hooks
A component has a lifecycle managed by Angular.

## Routing and Navigation
[Routing and Navigation Tutorial](https://angular.io/tutorial/toh-pt5)

## Promises and Observables
- Promise<T>: easy to use when you only need to fetch the data 
- Observable<T>: easy to to a request-cancel-new-request

## View Encapsulation (Shadow DOM)
- alters the technique applied for encapsulation
- options are NONE, NATIVE, and EMULATED (default)
```typescript
@Component({
  encapsulation: ViewEncapsulation.Native
})
```

##### Resources:
- [Angular Documentation: Directives](https://angular.io/guide/attribute-directives)
- [Angular Documentation: Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)
