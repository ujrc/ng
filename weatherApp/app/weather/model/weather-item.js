"use strict";
var WeatherItem = (function () {
    function WeatherItem(cityName, description, temperature, wind) {
        this.cityName = cityName;
        this.description = description;
        this.temperature = temperature;
        this.wind = wind;
    }
    return WeatherItem;
}());
exports.WeatherItem = WeatherItem;
//# sourceMappingURL=weather-item.js.map