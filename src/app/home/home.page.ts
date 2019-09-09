import { Component, OnInit, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  @ViewChild(GoogleMapsComponent, {static: false}) mapComponent: GoogleMapsComponent;



  constructor() {}

  testMarker(){

    const center = this.mapComponent.map.getCenter();
    this.mapComponent.addMarker(center.lat(), center.lng());

}

}
