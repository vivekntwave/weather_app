import createSearch from "./search";
import createWeatherCard from "./weatherCard";
import createForecast from "./forecast";
import createInsights from "./insights";

export default function createWeatherPage() {
  return `
    <section class="weather-page">
      ${createSearch()}

      <div id="weather-card-container">
        ${createWeatherCard()}
      </div>

      ${createForecast()}
      ${createInsights()}
    </section>
  `;
}