import {Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();

  newServerContent = '';

  constructor() { }

  ngOnInit() { }

  /* passing a local reference from template */
  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverNameInput.value,
      content: this.newServerContent
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverNameInput.value,
      content: this.newServerContent
    });
  }

}
