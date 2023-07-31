import { Component, OnInit} from '@angular/core';
import { WorldMapService } from './services/world-map.service';
import { SvgService } from './services/svg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd280_app';
  searchQuery: string = '';

  constructor (private svgService: SvgService, private worldMapService: WorldMapService) {}

  onSearch(searchTerm: string) {
    const searchTermLowerCase = searchTerm.trim().toLowerCase();
    const matchingPath = this.svgService.svgPaths.find(path => path.getAttribute('name')?.toLowerCase() === searchTermLowerCase);

    if(!matchingPath) {
      console.log("Country does not exist");
      return;
    }
    
    const countryId = matchingPath.id;
    this.searchCountryData(countryId);
  }

  searchCountryData(countryId: string) {
    this.worldMapService.search(countryId).subscribe(data => {
      console.log('Country Data:', data);
    },
    error => {
      console.error('error', error);
  }
  );
  }
}
