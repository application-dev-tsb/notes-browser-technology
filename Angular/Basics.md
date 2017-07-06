# Angular: Basic Concepts

## Directives
An Attribute directive changes the appearance or behavior of a DOM element.

#### Components
directives with a template.
```html
```

#### Structural directives
change the DOM layout by adding and removing DOM elements.

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

##### Resources:
- [Angular Documentation: Directives](https://angular.io/guide/attribute-directives)
