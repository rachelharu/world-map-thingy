import { Directive, ElementRef, HostListener } from '@angular/core';
import { SvgService } from '../../services/svg.service';

@Directive({
  selector: 'svg',
})
export class SvgPathClickDirective {
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