import createSearch from "./search";
import createWeatherCard from "./weatherCard";
import createForecast from "./forecast";
import createInsights from "./insights";

export default function createWeatherPage() {
  return `
    <main class="weather-page">
      ${createSearch()}
      ${createWeatherCard()}
      ${createForecast()}
      ${createInsights()}
    </main>
  `;
}