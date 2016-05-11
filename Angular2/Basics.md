# Angular2: Basic Concepts

## Property Binders
Binds the DOM element to a variable

#### One-way Binder
```
<li [class.selected]="hero === selectedHero">
```

#### Two-way Binder
```
<input [(ngModel)]="myVariable">
```

## Structural Directives
Changes the structure of the DOM, ussually starts with *
#### Repeater/For
```
<li *ngFor="let hero of heroes">
  {{hero.name}}
</li>
```

#### Conditional
```
<div *ngIf="selectedHero">
```

## Event Binders
Binds events to functions
```
<li (click)="onSelect(hero)">
```

##### Resources:
- [Property Binders](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding)
