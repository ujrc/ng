import { Component, OnInit } from '@angular/core';
import {Weather} from '../model/weather';
import  'rxjs/Rx';
import {WeatherService} from '../services/weather.service';

import {WEATHER_COLORS} from './constants/constants';
declare var Skycons: any; //Gives error

@Component({
  selector: 'udemtuto-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers:[WeatherService]
})

export class WeatherWidgetComponent implements OnInit {
  pos:Position;
  currentSpeedUnit="kph";
  currentTempUnit='fahrenheit';
  currentLocation="";
  dataRecieved=false;
  icons = new Skycons({"color":'#FFF'}); //Gives error

  weatherData=new Weather(null,null,null,null,null);
  constructor(private weatherService:WeatherService) { 
}

  ngOnInit() {

    this.getCurrentLocation();
    }
    getCurrentLocation(){

            this.weatherService.getLocation()
      .subscribe(positions=>{
      this.pos=positions
      this.getCurrentWeather();
      this.getLocName();
      },
      err=>console.error(err));
  }

    
    getCurrentWeather(){
      this.weatherService.getWeather(this.pos.coords.latitude,this.pos.coords.longitude)
            .subscribe(weather=>{
      this.weatherData.temp=weather['currently']['temperature'],
      this.weatherData.summary=weather['currently']['summary'],
      this.weatherData.wind=weather['currently']['windSpeed'],
      this.weatherData.humidity=weather['currently']['humidity'],
      this.weatherData.icon=weather['currently']['icon']
      // console.log("Weather Data : ",this.weatherData);
      // console.log(weather);
      this.setIcon();
      this.dataRecieved=true;
      },
          err=>console.error(err));
    }

    getLocName(){
      this.weatherService.getLocationName(this.pos.coords.latitude,this.pos.coords.longitude)
      .subscribe(location=>{
        console.log(location);
        this.currentLocation=location['results'][1]['formatted_address'];
       console.log("Name: ",this.currentLocation);
      });
    }
    toggleUnits(){
      this.toggleTempUnits();
      this.toggleSpeedUnits();

    }

    toggleTempUnits(){
      if(this.currentTempUnit=="fahrenheit"){
        this.currentTempUnit="celsius";
      }else{
        this.currentTempUnit='fahrenheit';
      }
    }

    toggleSpeedUnits(){
      if(this.currentSpeedUnit=="kph"){
        this.currentSpeedUnit='mph';
      }else{
        this.currentSpeedUnit='kph';
      }
    }

    setIcon(){
      this.icons.add("icon",this.weatherData.icon);
      this.icons.play();
    }

    setStyles():Object{
      if(this.weatherData.icon){
        return WEATHER_COLORS[this.weatherData.icon]
      }else{
        return WEATHER_COLORS['default'];
      }
    }
  }


