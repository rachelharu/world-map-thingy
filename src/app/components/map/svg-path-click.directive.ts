import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { SvgService } from '../../services/svg.service';

@Directive({
  selector: 'svg',
})
export class SvgPathClickDirective {
  @Output() countryDataClicked = new EventEmitter<any>();

  private countryData: any;
  
  constructor(private el: ElementRef, private svgService: SvgService) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as SVGElement;
    if (target.tagName === 'path') {
      const id = target.getAttribute('id');
      if (id !== null) {
      this.svgService.searchCountryData(id).subscribe(
      (data) => {
        console.log('Country Data:', data);
        this.countryData = data;
        this.svgService.countryDataEmitter.emit(this.countryData);
        this.countryDataClicked.emit(this.countryData);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
        console.log("this is the id from the svg-path-click directive: " + id);
      }
    }
  }
}