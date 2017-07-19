# Attribute Directives
Alters the appearance and behaviour of an element, component, or another directive. 
I personally dont like the way they let you assign the properties as it may become ambigous at times.
I probably would work around this using config objects.

###### Declaration
```typescript
@Directive({
  selector: '[appHostbindingHighlight]'
})
export class HostbindingHighlightDirective {
	@Input("appHostbindingHighlight") primaryProperty: string; //technique for directives having only one property
	@Input() myOtherProperty: string;
}
```

###### Usage
```html
<p appHostbindingHighlight="test" [myOtherProperty]="'red'" >Test</p>
<p [appHostbindingHighlight]="'test'" myOtherProperty="red" >Test</p>
```

