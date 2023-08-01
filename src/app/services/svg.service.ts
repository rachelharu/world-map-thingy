import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SvgService {
  svgPaths: SVGPathElement[] = [];
  countryNames: string[] = [];
  private apiUrl = 'http://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) {}

  public search(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}?format=json`;
    return this.http.get<any>(url);
  }
  
  public searchCountryData(countryId: string): Observable<any> {
    const url = `${this.apiUrl}/${countryId}?format=json`; // Use countryId in the URL
    return this.http.get<any>(url);
  }
}

