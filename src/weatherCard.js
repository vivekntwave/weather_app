export default function createWeatherCard() {
    return `
      <section class="weather-card">
        <div class="weather-card__main">
          <h2 class="weather-card__city">
            Copenhagen, Denmark
          </h2>
  
          <p class="weather-card__date">
            Monday, Oct 24
          </p>
  
          <div class="weather-card__temp">
            12°
          </div>
  
          <p class="weather-card__condition">
            Partly Cloudy
          </p>
        </div>
  
        <div class="weather-card__stats">
          <div class="weather-card__stat">
            Humidity 64%
          </div>
  
          <div class="weather-card__stat">
            Wind Speed 18 km/h
          </div>
  
          <div class="weather-card__stat">
            Pressure 1012 hPa
          </div>
        </div>
      </section>
    `;
  }