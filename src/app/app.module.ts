import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { InfoComponent } from './components/info/info.component';
import { PathClickDirective } from './components/map/path-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InfoComponent,
    PathClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
