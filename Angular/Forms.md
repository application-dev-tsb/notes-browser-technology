# Forms

## Pre-requistes
- import the forms module
```
//app.module.ts
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
 })
```

## Accessing the Form Object
- ElementRef
```html
<form (ngSubmit)="onSubmit(f)" #f>
```
```typescript
import { ElementRef } from '@angular/core';

onSubmit(form: ElementRef) { ... }
```
- NgForm object
```html
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
```
```typescript
import { NgForm } from '@angular/forms';

onSubmit(form: NgForm) { ... }
```
- @ViewChild
```typescript
class X {
  @ViewChild('f') form: NgForm;
}
```

## Important Form Properties
| Property | Description 					|
| -------- | ------------------------------ |
| dirty    | value changed					|
| touched  | an input element was accessed	|
| valid    | passed all validators 			|
| controls | list of inputs					|
