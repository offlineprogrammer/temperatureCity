import { Component, OnInit, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';

import {GeocodeService} from '../services/geocode.service';
import { geoLocation } from '../interfaces/geoLocation';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit  {

  public location: geoLocation;

  @ViewChild(GoogleMapsComponent, {static: false}) mapComponent: GoogleMapsComponent;



  constructor(private geocodeService: GeocodeService) {

    this.location = {
      locality: '',
      country: ''
    };
    
  }

  async testMarker(){
    const myaddress = this.geocodeService.getAddress(123);
    console.log(myaddress);

   

  //  console.log('Clicked');
    const center = this.mapComponent.map.getCenter();
    this.mapComponent.addMarker(center.lat(), center.lng());

}

ngOnInit() {
  
  if (this.geocodeService.loaded) {
    this.geocodeService.getAddress(123).then((result) => {
      this.location = result;
    });

  } else {
    this.geocodeService.load().then(() => {
      this.geocodeService.getAddress(123).then((result) => {
        this.location = result;
      });
    });
  }
}


}
