import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:  {type: string, name: string, content: string}[] = [];

  public defaultServerName: string = 'default';

  onServerAdded(server: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: server.name,
      content: server.content
    });
  }

  onBlueprintAdded(server: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: server.name,
      content: server.content
    });
  }

  getDefaultServerName(): string {
    return "test";
  }

  onForceChange(): void{
    console.log('emit changes');
    this.defaultServerName = 'changed default';
  }
}
