import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WorldMapService {
  constructor(private http: HttpClient) { } 

  public search(id: string) {
    return this.http.get('http://api.worldbank.org/v2/country/${id}?format=json', {
      params: {

      }
    });
  }
}
