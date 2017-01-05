import { APPID } from './../constants/constants';
import { WeatherItem } from './../model/weather-item';

import { Http } from '@angular/http';
import { WEATHER_ITEMS } from './weather.data';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class WeatherService{
 private baseUrl='http://api.openweathermap.org/data/2.5/';

    constructor(private http:Http){}
    getWeatherItems(){
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem:WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName:string): Observable<any>{
        return this.http.get(this.baseUrl+'weather?q='+cityName+'&APPID='+APPID+'&units=imperial')
        .map(resp=>resp.json())
        .catch(error=>{
            console.error(error);
            return Observable.throw(error.json())
        });
    }

    getWeatherForecast(cityName): Observable<any[]>{

     return this.http.get(this.baseUrl+'forecast?q='+ cityName +'&appid='+ APPID+'&units=metric')
     .map(response => this.extractData(response))
     .catch(this.handleError);
  }

   private extractData(res: any) {
    let body = res.json();
    return body.list || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    // if (error instanceof Response) {
    //   const body = error.json() || '';
    //   const err = body.error || JSON.stringify(body);
    //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    // } else {
      errMsg = error.message ? error.message : error.toString();
    //}
    console.error(errMsg);
    return Observable.throw(errMsg);

}
}
