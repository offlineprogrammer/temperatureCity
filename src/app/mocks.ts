import { geoLocation } from './interfaces/geoLocation';

export class GeocodeServiceMock {
  public location: geoLocation = {
    locality: 'myCity',
      country: 'myCountry'
  };

  public loaded = true;

  async load() {
   
    this.loaded = true;
  }

  async getAddress(latlng: string ) {
    console.log(this.location);
    return this.location;
  }


}
