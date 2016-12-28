"use strict";
var WeatherItem = (function () {
    function WeatherItem(location, description, temperature, wind) {
        this.location = location;
        this.description = description;
        this.temperature = temperature;
        this.wind = wind;
    }
    return WeatherItem;
}());
exports.WeatherItem = WeatherItem;
//# sourceMappingURL=weather-item.js.map