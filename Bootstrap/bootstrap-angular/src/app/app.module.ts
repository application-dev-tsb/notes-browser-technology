import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { NavigationComponent } from './basic/navigation/navigation.component';
import { CoverComponent } from './basic/cover/cover.component';
import { CarouselComponent } from './basic/carousel/carousel.component';
import { WhatwedoComponent } from './basic/whatwedo/whatwedo.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    NavigationComponent,
    CoverComponent,
    CarouselComponent,
    WhatwedoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
