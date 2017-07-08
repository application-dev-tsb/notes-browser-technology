import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = '';
  serverCreated = false;
  servers: string[] = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created';
    console.log('Created: ', this.serverName);
    this.serverName = '';
    this.serverCreated = true;
  }

  onUpdateServerEvent(event: Event) {
    console.log(event);
  }

  onReset() {
    this.serverName = '';
  }
}
