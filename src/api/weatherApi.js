export async function getCoordinates(city) {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}&count=1`
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch city data");
    }
  
    const data = await response.json();
  
    if (!data.results || data.results.length === 0) {
      throw new Error("City not found");
    }
  
    return data.results[0];
  }
  
export async function getWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}
    &current=temperature_2m,relative_humidity_2m,wind_speed_10m,pressure_msl,weather_code
    &hourly=temperature_2m,relative_humidity_2m,weather_code
    &daily=weather_code,temperature_2m_max,temperature_2m_min
    &forecast_days=5`
      .replace(/\s+/g, "")
  );
  
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  
  return response.json();
}