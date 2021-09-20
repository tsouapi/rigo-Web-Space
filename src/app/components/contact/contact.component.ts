import { Component, OnInit, enableProdMode } from '@angular/core';

declare const L: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!navigator.geolocation){
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 13);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicjF0c291YXBpIiwiYSI6ImNrdHBzbm5xYjBwb2kyb3F1MGY0ZW1iazgifQ.a_HDoBSMqb0hUcX4h0Mbfw', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);

      const marker = L.marker(latLong).addTo(mymap);

      marker.bindPopup('<b>Here</b>').openPopup();

      let popup = L.popup()
      .setLatLng(latLong)
      .setContent('This is my current position! Thank You.')
      .openOn(mymap);
    });
    this.watchPosition();
  }

  // tslint:disable-next-line:typedef
  watchPosition(){
    const desLat = 0;
    const desLon = 0;
    const id = navigator.geolocation.watchPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if (position.coords.latitude === desLat){
        navigator.geolocation.clearWatch(id);
      }
  }, (err) => {
    console.log(err);
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  });

 }

}
