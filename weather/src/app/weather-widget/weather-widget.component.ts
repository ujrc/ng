import { Component, OnInit } from '@angular/core';


import {WeatherService} from '../services/weather.service';
@Component({
  selector: 'udemtuto-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers:[WeatherService]
})
export class WeatherWidgetComponent implements OnInit {
pos:Position;
  constructor(private weatherService:WeatherService) { 
      this.weatherService.getLocation()
      .subscribe(positions=>{
this.pos=positions
      this.weatherService.getWeather(this.pos.coords.latitude,this.pos.coords.longitude)
      .subscribe(data=>console.log(data),
          err=>console.error(err));
      },
      err=>console.error(err));
  }

  ngOnInit() {
  }

}
