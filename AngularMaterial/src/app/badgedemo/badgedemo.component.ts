import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badgedemo',
  templateUrl: './badgedemo.component.html',
  styleUrls: ['./badgedemo.component.scss']
})
export class BadgedemoComponent implements OnInit {
  badgeCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
