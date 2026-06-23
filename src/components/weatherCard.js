import { getWeatherInfo } from "../../utils/weatherCodes";
import { getTemperatureClass } from "../../utils/temperatureTheme";

export default function createWeatherCard(data = {}) {
  if (!data.city) {
    return `
      <section class="weather-card">
        <h2>Search for a city</h2>
      </section>
    `;
  }

  const weatherInfo = getWeatherInfo(data.weatherCode);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return `
    <section class="weather-card">

      <div class="weather-card__header">

        <div class="weather-card__location">
          <h2 class="weather-card__city">
            ${data.city}, ${data.country}
          </h2>

          <p class="weather-card__date">
            <i data-lucide="calendar" class="weather-card__date-icon"></i>
            ${currentDate}
          </p>
        </div>

        <div class="weather-card__temperature">
          <span class="weather-card__temp ${getTemperatureClass(
            data.temperature
          )}">
            ${Math.round(data.temperature)}°
          </span>
        </div>

        <div class="weather-card__condition">
          <span class="weather-card__icon">
            ${weatherInfo.icon}
          </span>

          <span>
            ${weatherInfo.label}
          </span>
        </div>

      </div>

      <div class="weather-card__stats">

        <div class="weather-card__badge">
          <i data-lucide="droplets" class="weather-card__badge-icon"></i>
          <span>Humidity</span>
          <strong>${data.humidity}%</strong>
        </div>

        <div class="weather-card__badge">
          <i data-lucide="wind" class="weather-card__badge-icon"></i>
          <span>Wind Speed</span>
          <strong>${data.windSpeed} km/h</strong>
        </div>

        <div class="weather-card__badge">
          <i data-lucide="gauge" class="weather-card__badge-icon"></i>
          <span>Pressure</span>
          <strong>${data.pressure} hPa</strong>
        </div>

      </div>

    </section>
  `;
}