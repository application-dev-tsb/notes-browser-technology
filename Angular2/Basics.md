# Angular2: Basic Concepts

## Two-way Binders
Binds the DOM element to a variable
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
