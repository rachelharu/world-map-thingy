import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldMapService {
  constructor(private http: HttpClient) { } 

  private apiUrl = 'http://api.worldbank.org/v2/country/br?format=json'

  public search(term: string) {
    return this.http.get('http://api.worldbank.org/v2/country/br?format=json', {
      params: {}
    });
  }
  
  
  // getData(){
  //   console.log(this.http.get(this.apiUrl));
  //   return this.http.get(this.apiUrl);
  // }

}
