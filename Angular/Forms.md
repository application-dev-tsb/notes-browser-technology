# Forms

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
