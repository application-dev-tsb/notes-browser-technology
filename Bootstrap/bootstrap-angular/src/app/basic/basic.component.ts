import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
    <app-navigation></app-navigation>
    <app-cover></app-cover>
    <app-carousel></app-carousel>
  `,
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
