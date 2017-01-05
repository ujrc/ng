import { WeatheSearchComponent } from './weather/components/weather-search.component';
import { WeatherListComponent } from './weather/components/weather-list.component';

import { WeatherService } from './weather/services/weather.service';
import { WeatherItemComponent } from './weather/components/weather-item.component';
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
    WeatherListComponent,
    WeatheSearchComponent
    ],
    providers:[WeatherService],
    bootstrap:[AppComponent]
})

export class AppModule{

}