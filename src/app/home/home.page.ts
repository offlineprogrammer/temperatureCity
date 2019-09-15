import { Component, OnInit, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation, Network } = Plugins;
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


ngOnInit() {

  let mylatLng : string;

  Geolocation.getCurrentPosition().then((position) => {
    mylatLng = (position.coords.latitude.toString() + ',' + position.coords.longitude.toString());
    console.log('Location is '+ mylatLng);
    if (this.geocodeService.loaded) {
      this.geocodeService.getAddress(mylatLng).then((result) => {
        this.location = result;
      });
  
    } else {
      this.geocodeService.load().then(() => {
        this.geocodeService.getAddress(mylatLng).then((result) => {
          this.location = result;
        });
      });
    }
  });

  
}


}
