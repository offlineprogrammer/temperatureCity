import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { geoLocation } from '../interfaces/geoLocation';

const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=31.963158,35.930359&key=';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  public location: geoLocation;

  constructor(private http: HttpClient) {
    this.location = {
      locality: '',
      country: ''
    };
   }


  async getAddress(latlng: number ) {


    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(response.statusText);
        }
      const json = await response.json();

      for (const element of json.results) {
        if (element.length === 0 && !element.types) { continue; }

        if (element.types.indexOf('locality') > -1) {
          this.location.locality =  element.address_components[0].long_name;
          continue;
        }

        if (element.types.indexOf('country') > -1) {
          this.location.country =  element.address_components[0].long_name;
          continue;
        }
      }
      console.log(this.location);
      return json;
    } catch (error) {
      console.log(error);
    }

  }
}
