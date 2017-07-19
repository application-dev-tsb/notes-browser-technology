import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { AdvancedHighlightDirective } from './directive/advanced-highlight.directive';
import { HostbindingHighlightDirective } from './directive/hostbinding-highlight.directive';
import { DestroyerDirective } from './directive/destroyer.directive';
import { DemoDestroyerComponent } from './demo-destroyer/demo-destroyer.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    AdvancedHighlightDirective,
    HostbindingHighlightDirective,
    DestroyerDirective,
    DemoDestroyerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
