# Angular2: Basic Concepts

#### Two-way Binding
```
<input [(ngModel)]="myVariable">
```

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

#### Event Handler
```
<li (click)="onSelect(hero)">
```
