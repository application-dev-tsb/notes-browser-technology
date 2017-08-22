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

## Pipes
- Pipe Parameters
- Pure and Impure Pipes
- "async" Pipe

## Routing and Navigation
- [Routing and Navigation Tutorial](https://angular.io/tutorial/toh-pt5)
- Router Links
- Programmatic Navigation
- Route Parameters
- Protecting Routes (Guards)
- Path Matching Deep Dive

## HTTP Requests
- Sending Requests
- Transforming and Using Response
- Catching HTTP Error
- Using "async" pipe

## Animations
- Triggers and State
- Transitions
- Keyframes
- Grouping Animations
- Animation Callbacks

## Lifecycle Hooks
A component has a lifecycle managed by Angular.

| Lifecycle    				| Description										 |
| ------------------------- | -------------------------------------------------- |
| ngOnChanges 				| invoked when an Input element changed its value 	 | 
| ngOnInit 					| invoked after the first ngOnChanges 				 |
| ngDoCheck 				| invoked when angular tries to check a change 		 |
| ngAfterViewInit 			| view is now available								 |
| ngAfterViewChecked 		| 													 |
| ngAfterContentInit 		| ng-content is now available						 |
| ngAfterContentChecked 	|													 |
| ngOnDestroy 				| cleanup here		

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

## Component Reference
- local reference
```html
<input type="text" class="form-control" #serverContentInput>
<button
      class="btn btn-primary"
      (click)="onAddBlueprint(serverNameInput)">Add Server Blueprint</button>
```
```typescript
onAddBlueprint(serverNameInput: HTMLInputElement) { }
```
- ViewChild
```
@ViewChild('serverContentInput') serverContentInput: ElementRef; //add this to the component

this.serverContentInput.nativeElement.value; //access the native element
```

## ng-content
- hook for parent component to add contents
```html
<!-- Component 1 -->
<div>
Component 1
<ng-content></ng-content>
<div>

<!-- Component 2 -->
<div>
Component 2
<component1>
	Other Content
</component1>
<div>
```

## Angular Forms
- Template-driven Approach
- Reactive Approach
- Validation
- Submitting Form

##### Resources:
- [Angular Documentation: Directives](https://angular.io/guide/attribute-directives)
- [Angular Documentation: Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)
