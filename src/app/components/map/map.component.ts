import { Component, AfterViewInit } from '@angular/core';
import { SvgService } from '../../services/svg.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})

export class MapComponent implements AfterViewInit {
  constructor(private svgService: SvgService) {}

  ngAfterViewInit() {
    const countryPaths = document.querySelectorAll('path[name]') as NodeListOf<SVGPathElement>;
    const countryNames = Array.from(countryPaths).map(path => path.getAttribute('name') || '' );
    this.svgService.svgPaths = Array.from(countryPaths);
    this.svgService.countryNames = countryNames;
    console.log('SVG Paths:', this.svgService.svgPaths);
  }


}
 