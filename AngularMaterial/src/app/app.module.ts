import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { TosComponent } from './tos/tos.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MaterialModule} from './material/material.module';
import { TypodemoComponent } from './typodemo/typodemo.component';
import { ButtondemoComponent } from './buttondemo/buttondemo.component';
import { IcondemoComponent } from './icondemo/icondemo.component';
import { BadgedemoComponent } from './badgedemo/badgedemo.component';
import { ToolbardemoComponent } from './toolbardemo/toolbardemo.component';
import { ListdemoComponent } from './listdemo/listdemo.component';
import { ExpansionpaneldemoComponent } from './expansionpaneldemo/expansionpaneldemo.component';
import { CardsdemoComponent } from './cardsdemo/cardsdemo.component';
import { TabdemoComponent } from './tabdemo/tabdemo.component';
import { StepperdemoComponent } from './stepperdemo/stepperdemo.component';
import {ImbaSnackbarComponent, SnackbardemoComponent} from './snackbardemo/snackbardemo.component';
import { DialogdemoComponent } from './dialogdemo/dialogdemo.component';
import { DialogContentComponent } from './dialogdemo/dialog-content/dialog-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TosComponent,
    PrivacyComponent,
    HomepageComponent,
    NavigationComponent,
    FormComponent,
    DashboardComponent,
    TypodemoComponent,
    ButtondemoComponent,
    IcondemoComponent,
    BadgedemoComponent,
    ToolbardemoComponent,
    ListdemoComponent,
    ExpansionpaneldemoComponent,
    CardsdemoComponent,
    TabdemoComponent,
    StepperdemoComponent,
    SnackbardemoComponent,
    ImbaSnackbarComponent,
    DialogdemoComponent,
    DialogContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
