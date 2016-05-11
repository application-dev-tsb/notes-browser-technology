# Angular2: Basic Concepts

#### Two-way Binding
```
<input [(ngModel)]="myVariable">
```

#### Repeater
```
<li *ngFor="let hero of heroes">
  {{hero.name}}
</li>
```

#### Event Handler
```
<li (click)="onSelect(hero)">
```
