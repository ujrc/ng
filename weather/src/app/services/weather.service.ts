import { Injectable } from '@angular/core';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch'
 import 'rxjs/Rx';
 import {Jsonp} from '@angular/http';
 import {Observable} from 'rxjs/Rx';

import {FORECAST_KEY, FORECAST_ROOT_URL} from '../weather-widget/constants/constants';
@Injectable()
export class WeatherService {

  constructor(private jsonp:Jsonp) { }
getLocation():Observable<any>{
    if(navigator.geolocation){
        return Observable.create(observer=>{
        navigator.geolocation.getCurrentPosition(pos=>{
           observer.next(pos);
        }),
        //     console.log("Coordinates: ",pos.coords.latitude,',', pos.coords.longitude);
        //     return [pos.coords.latitude,pos.coords.longitude]
        // },
        err=>{
            return Observable.throw(err);
        }
    });
}else{
        // console.error('Geolocation not available');
        return Observable.throw('Geolocation not available');
    }
}
getWeather(lat:number, lng:number):Observable<any>{
const url=FORECAST_ROOT_URL+FORECAST_KEY+"/"+lat+","+lng;
const queryParams="?callback=JSONP_CALLBACK";
return this.jsonp.get(url+queryParams)
.map(resp=>resp.json())
.catch(err=>{
    console.error("Unable to get weather data: ",err);
    return Observable.throw(err.json());
    
});
}
}
