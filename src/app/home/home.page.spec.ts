import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';
import { GeocodeServiceMock } from '../mocks';
import { GeocodeService } from '../services/geocode.service';


describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage, GoogleMapsComponent ],
      providers: [{provide:GeocodeService, useClass: GeocodeServiceMock}],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays current city name', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.cityName'));
    el = de.nativeElement;
    expect(el.textContent).toContain('myCity');
  });

 


  it('displays google map', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('app-google-maps'));
    console.log(de);
    el = de.nativeElement;
    expect(de).toBeTruthy();
  });


  it('displays myCountry', async(() => {
    fixture.whenStable().then(() => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.countryName'));
    el = de.nativeElement;
    console.log(el);
    expect(el.textContent).toContain('myCountry');
});
}));

});
