import { WeatherItem } from './../model/weather-item';
import {Component, Input,OnInit} from'@angular/core';



@Component({
    selector:'app-weather-item',
    // inputs:['weatherItem'],
    // inputs:['weatherItem:weather'],
    templateUrl:'./app/weather/components/weather-item.component.html'
})

export class WeatherItemComponent implements OnInit{
//    @Input() weatherItem:WeatherItem;
 @Input('weather') weatherItem:WeatherItem;

    constructor(){

    }

    ngOnInit(){

    }
}