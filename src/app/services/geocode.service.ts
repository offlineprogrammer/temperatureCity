import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=31.963158,35.930359&key=';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  constructor(private http: HttpClient) { }


  async getAddress(latlng: number ) {

    let response = await fetch(apiUrl);
    let json = await response.json();
    console.log(json);
    console.log(json.results[10]);
    return json;



  }
}
