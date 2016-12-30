import { WeatherItem } from './../model/weather-item';
import { OPEN_WEATHER_API_KEY } from './../constants/constants';
import { Http } from '@angular/http';
import { WEATHER_ITEMS } from './weather.data';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class WeatherService{
    constructor(private http:Http){}
    getWeatherItems(){
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem:WeatherItem){
        WEATHER_ITEMS.push(weatherItem);

    }

    searchWeatherData(cityName:string): Observable<any>{
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID='+OPEN_WEATHER_API_KEY+'&units=metric')
        .map(resp=>resp.json())
        .catch(error=>{
            console.error(error);
            return Observable.throw(error.json())
        });
    }

}