import { WeatherService } from './../services/weather.services';
import { NgForm } from '@angular/forms';
import { WeatherItem } from './../model/weather-item';

import { Component } from '@angular/core';

@Component({
    selector:'app-weather-search',
    templateUrl:'./app/weather/components/weather-search.component.html',
  
})
export class WeatheSearchComponent{
    
    constructor(private weatherService:WeatherService){}

onSubmit(form: NgForm){
    if (form.value.cityName){
   this.weatherService.searchWeatherData(form.value.cityName)
   .subscribe(
       data=>{
           const weatherItem=new WeatherItem(data.name,data.weather[0].description,data.main.temp, data.wind.speed);
           this.weatherService.addWeatherItem(weatherItem);
           console.log(weatherItem);

       }
   )
    }
    else{
        this.weatherService.searchWeatherData("Madison")
   .subscribe(
       data=>{
           const weatherItem=new WeatherItem(data.name,data.weather[0].description,data.main.temp, data.wind.speed);
           this.weatherService.addWeatherItem(weatherItem);
           console.log(weatherItem);
    }
   )
    }
}
onSearchLocation(cityName:string){
     this.weatherService.searchWeatherData(cityName)
   .subscribe(
       data=>{
           const weatherItem=new WeatherItem(data.name,data.weather[0].description,data.main.temp, data.wind.speed);
           this.weatherService.addWeatherItem(weatherItem);
   })
   }

}
