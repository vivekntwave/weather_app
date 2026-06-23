import createWeatherCard from "../src/components/weatherCard";
import createForecast from "../src/components/forecast";
import createInsights from "../src/components/insights";

export default function renderAll(weather, hourIndex = null, dayIndex = 0) {
    document.getElementById("weather-card-container").innerHTML =
      createWeatherCard({
        city: weather.city,
        country: weather.country,
        temperature: hourIndex !== null
          ? weather.hourly.temperature_2m[hourIndex]
          : weather.current.temperature_2m,
        humidity: hourIndex !== null
          ? weather.hourly.relative_humidity_2m[hourIndex]
          : weather.current.relative_humidity_2m,
        windSpeed: weather.current.wind_speed_10m,
        pressure: weather.current.pressure_msl,
        weatherCode: hourIndex !== null
          ? weather.hourly.weather_code[hourIndex]
          : weather.current.weather_code
      });
  
    document.getElementById("forecast-container").innerHTML =
      createForecast(weather, dayIndex);
  
    document.getElementById("insights-container").innerHTML =
      createInsights(weather, dayIndex);
  }