import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { PathClickDirective } from './components/map/path-click.directive';
import { WorldMapService } from './services/world-map.service';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { InfoComponent } from './components/info/info.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InfoComponent,
    PathClickDirective,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [WorldMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
