import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public feature: string = 'recipe';

  constructor() { }

  ngOnInit() { }

  onNavigate(feature: string) {
    this.feature = feature;
  }

}
