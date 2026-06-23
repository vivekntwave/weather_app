import { getWeatherInfo } from "../../utils/weatherCodes";

export default function createForecast(weather,selectedDayIndex=0) {
  if (!weather?.daily) {
    return `
      <section class="forecast">
        <p>Search for a city to see the forecast</p>
      </section>
    `;
  }

  const days = weather.daily.time;

  return `
    <section class="forecast">
      ${days
        .map((day, index) => {
          const date = new Date(day);

          const label =
            index === 0
              ? "TODAY"
              : date
                  .toLocaleDateString("en-US", { weekday: "short" })
                  .toUpperCase();

          const weatherInfo = getWeatherInfo(weather.daily.weather_code[index]);

          return `
            <div
              class="forecast__day ${index === selectedDayIndex ? "forecast__day--active" : ""}"
              data-day-index="${index}"
            >
              <p class="forecast__label">${label}</p>
              <p class="forecast__icon">${weatherInfo.icon}</p>
              <p class="forecast__high">
                ${Math.round(weather.daily.temperature_2m_max[index])}°
              </p>
              <p class="forecast__low">
                ${Math.round(weather.daily.temperature_2m_min[index])}°
              </p>
            </div>
          `;
        })
        .join("")}
    </section>
  `;
}