import { Injectable } from '@angular/core';
import { geoLocation } from '../interfaces/geoLocation';



@Injectable({
  providedIn: 'root'
})
export class GeocodeService {
  public loaded = false;
  private apiKey =  'YOUR_API_KEY_HERE';
  public location: geoLocation;

  constructor() {
    this.location = {
      locality: '',
      country: ''
    };
   }

   async load() {
    this.loaded = true;
  }

  async getAddress(locationlatlng: string ) {
    try {
      const response = await fetch( `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationlatlng}&key=${this.apiKey}`);
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
      return this.location;
    } catch (error) {
      console.log(error);
    }

  }
}
