import { Component, OnInit } from '@angular/core';
import { WorldMapService } from './services/world-map.service';
import { SvgService } from './services/svg.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  // title = 'd280_app';
  searchQuery: string = '';
  data: any; // Use a single variable to store countryData or clickedCountryData

  private clickedCountryDataSubscription: Subscription = new Subscription();

  constructor(private svgService: SvgService, private worldMapService: WorldMapService) {}

  ngOnInit() {
    this.svgService.countryDataEmitter.subscribe((data: any) => {
      this.data = data;
      console.log("received click data: ", data)
    });
  }

  onSearch(searchTerm: string) {
    const searchTermLowerCase = searchTerm.trim().toLowerCase();
    const matchingIndex = this.svgService.countryNames.findIndex(name => name.toLowerCase() === searchTermLowerCase);

    if (matchingIndex === -1) {
      console.log("Country does not exist");
      return;
    }
    const matchingPath = this.svgService.svgPaths[matchingIndex];
    const countryId = matchingPath.id;
    console.log("Matching ID:", countryId);
    this.searchCountryData(countryId);
  }

  searchCountryData(countryId: string) {
    this.worldMapService.search(countryId).subscribe(data => {
      console.log('Country Data:', data);
      this.data = data[1][0]; // Update the variable to the new data
      console.log('Country Data pt2:', this.data);
    },
    error => {
      console.error('error', error);
    });
  }

  onCountryDataClicked(data: any) {
    this.data = data;
    console.log("here", data);
  }
}