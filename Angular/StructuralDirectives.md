# Structural Directives
starts with the * character.

###### Usage
```html
<p *ngIf="10 > 1">
	10 is greater than 1
</p>
```

###### Equivalent
```html
<ng-template [ngIf]="10 > 1">
	<p>
		10 is greater than 1
	</p>
</ng-template>
```

## Common Structural Directives

###### ngIf
```html
<div *ngIf="condition">
Will only show if condition is true
</div>
```

###### ngSwitch
```html
<div [ngSwitch]="value">
	<p *ngSwitchCase="5">Value is 5</p>
	<p *ngSwitchCase="10">Value is 10</p>
	<p *ngSwitchCase="15">Value is 15</p>
	<p *ngSwitchDefault>Value is Default</p>
</div>
```

## Custom Structural Directives
```typescript
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDestroyer]'
})
export class DestroyerDirective {

  @Input("appDestroyer") set destroyIf(condition: boolean) {
  	if (!condition) {
  		this.vcRef.createEmbeddedView(this.templateRef);
  	} else {
  		this.vcRef.clear();
  	}
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
```
```html
<h1 *appDestroyer="destroy">Shown based on condition</h1>
```