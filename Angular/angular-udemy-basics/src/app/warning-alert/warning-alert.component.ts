import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<div class="alert alert-warning" role="alert">{{text}}</div>',
  styles: ['']
})
export class WarningAlertComponent implements OnInit {

  text = 'This is a Warning';

  constructor() { }

  ngOnInit() {
  }

}
