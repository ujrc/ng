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
var constants_1 = require('./../constants/constants');
var http_1 = require('@angular/http');
var weather_data_1 = require('./weather.data');
var core_1 = require('@angular/core');
require('rxjs/Rx');
var Rx_1 = require('rxjs/Rx');
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.baseUrl = 'http://api.openweathermap.org/data/2.5/';
    }
    WeatherService.prototype.getWeatherItems = function () {
        return weather_data_1.WEATHER_ITEMS;
    };
    WeatherService.prototype.addWeatherItem = function (weatherItem) {
        weather_data_1.WEATHER_ITEMS.push(weatherItem);
    };
    WeatherService.prototype.searchWeatherData = function (cityName) {
        return this.http.get(this.baseUrl + 'weather?q=' + cityName + '&APPID=' + constants_1.APPID + '&units=imperial')
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            console.error(error);
            return Rx_1.Observable.throw(error.json());
        });
    };
    WeatherService.prototype.getWeatherForecast = function (cityName) {
        var _this = this;
        return this.http.get(this.baseUrl + 'forecast?q=' + cityName + '&appid=' + constants_1.APPID + '&units=metric')
            .map(function (response) { return _this.extractData(response); })
            .catch(this.handleError);
    };
    WeatherService.prototype.extractData = function (res) {
        var body = res.json();
        return body.list || {};
    };
    WeatherService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        // if (error instanceof Response) {
        //   const body = error.json() || '';
        //   const err = body.error || JSON.stringify(body);
        //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        // } else {
        errMsg = error.message ? error.message : error.toString();
        //}
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map