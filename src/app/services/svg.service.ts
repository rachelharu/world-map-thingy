import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvgService {
  svgPaths: SVGPathElement[] = [];
  countryNames: string[] = [];
}
