import { WEATHER_ITEMS } from './../services/weather.data';
import { WeatherItem } from './../model/weather-item';

import {Component,OnInit} from '@angular/core';

@Component({
    selector:'app-weather-list',
    templateUrl:'./app/weather/components/weather-list.component.html',
})

export class WeatherListComponent implements OnInit{

    weatherItems:WeatherItem[];

    constructor() {}
    
    ngOnInit(){

        this.weatherItems=WEATHER_ITEMS;
    }

}