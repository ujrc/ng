import { WeatherItemComponent } from './weather/components/weather-item.component';
import { WeatherListComponent } from './weather/components/weather-list.component';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';


@NgModule({
    imports:[BrowserModule,
    FormsModule,
    HttpModule, ],
    declarations :[AppComponent,
                    WeatherItemComponent,
                    WeatherListComponent],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{

}