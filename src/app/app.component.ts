import { Component, Injectable } from '@angular/core';
import { WorldMapService } from './services/world-map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd280_app';

  // pages = [];

  constructor (private service: WorldMapService) {}

  onSearch(id: string) {
    this.service.search(id).subscribe((res: any) => {
      // this.pages = res.query.search;
      console.log(res.data);
    });
  }
}
