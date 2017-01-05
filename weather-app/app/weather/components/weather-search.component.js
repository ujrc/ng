"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var weather_item_1 = require('./../model/weather-item');
var weather_service_1 = require('./../services/weather.service');
var core_1 = require('@angular/core');
var WeatheSearchComponent = (function () {
    function WeatheSearchComponent(weatherService) {
        this.weatherService = weatherService;
    }
    WeatheSearchComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.weatherService.searchWeatherData(form.value.cityName)
            .subscribe(function (data) {
            var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp, data.wind.speed);
            _this.weatherService.addWeatherItem(weatherItem);
            console.log(weatherItem);
        });
    };
    WeatheSearchComponent.prototype.loadCity = function () {
    };
    WeatheSearchComponent = __decorate([
        core_1.Component({
            selector: 'app-weather-search',
            templateUrl: './app/weather/components/weather-search.component.html',
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatheSearchComponent);
    return WeatheSearchComponent;
}());
exports.WeatheSearchComponent = WeatheSearchComponent;
//# sourceMappingURL=weather-search.component.js.map