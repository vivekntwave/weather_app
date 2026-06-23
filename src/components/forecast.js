export default function createForecast() {
    return `
      <section class="forecast">
  
        <div class="forecast__day forecast__day--active">
          <p class="forecast__label">TODAY</p>
          <p class="forecast__icon">☀</p>
          <p class="forecast__high">12°</p>
          <p class="forecast__low">8°</p>
        </div>
  
        <div class="forecast__day">
          <p class="forecast__label">TUE</p>
          <p class="forecast__icon">☁</p>
          <p class="forecast__high">10°</p>
          <p class="forecast__low">6°</p>
        </div>
  
        <div class="forecast__day">
          <p class="forecast__label">WED</p>
          <p class="forecast__icon">🌧</p>
          <p class="forecast__high">9°</p>
          <p class="forecast__low">4°</p>
        </div>

        <div class="forecast__day">
          <p class="forecast__label">THU</p>
          <p class="forecast__icon">☀</p>
          <p class="forecast__high">15°</p>
          <p class="forecast__low"10°</p>
        </div>

        <div class="forecast__day">
          <p class="forecast__label">FRI</p>
          <p class="forecast__icon">🌧</p>
          <p class="forecast__high">8°</p>
          <p class="forecast__low">6°</p>
        </div>
  
      </section>
    `;
  }