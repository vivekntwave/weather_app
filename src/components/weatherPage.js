import createSearch from "./search";
import createWeatherCard from "./weatherCard";
import createForecast from "./forecast";
import createInsights from "./insights";

export default function createWeatherPage(weather) {
  return `
    <section class="weather-page">
      ${createSearch()}

      <div id="weather-card-container"></div>

      <div id="forecast-container">
        ${createForecast(weather)}
      </div>

      <div id="insights-container">
        ${createInsights(weather)}
      </div>
    </section>
  `;
}