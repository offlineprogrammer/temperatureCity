import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit(): void {

    Geolocation.getCurrentPosition().then((position) => {
      console.log(position);
  }, (err) => {
    console.log(err);
  });


  }

  constructor() {}

}
