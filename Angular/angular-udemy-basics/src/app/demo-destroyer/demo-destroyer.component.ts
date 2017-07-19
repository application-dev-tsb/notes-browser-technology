import { Component, OnInit, Output } from '@angular/core';

import { DestroyerDirective } from '../directive/destroyer.directive';


@Component({
  selector: 'app-demo-destroyer',
  template: `
	<h1 *appDestroyer="destroy">Shown because...</h1>

	<button (click)="onButtonClick()">Tap to change</button>
  `
})
export class DemoDestroyerComponent implements OnInit {

  destroy: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
  	this.destroy = !this.destroy;
  }

}
