import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './ngWeather/weather-widget/weather-widget.component';
import { HeaderComponent } from './ngWeather/header/header.component';
import { SpeedUnitPipe } from './ngWeather/pipe/speed-unit.pipe';
import { TemperatureUnitPipe } from './ngWeather/pipe/temperature-unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    HeaderComponent,
    SpeedUnitPipe,
    TemperatureUnitPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
