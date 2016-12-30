import { WeatherItem } from './../model/weather-item';
import { WeatherService } from './../services/weather.service';
import { Component } from '@angular/core';
import {NgForm}  from '@angular/forms';

@Component({
    selector:'app-weather-search',
    templateUrl:'./app/weather/components/weather-search.component.html',
  
})
export class WeatheSearchComponent{
    
    constructor(private weatherService:WeatherService){}

onSubmit(form: NgForm){
   this.weatherService.searchWeatherData(form.value.location)
   .subscribe(
       data=>{
           const weatherItem=new WeatherItem(data.name,data.weather[0].description,data.main.temp, data.wind.speed);
           this.weatherService.addWeatherItem(weatherItem);
           console.log(weatherItem);
       }
   )
}

}