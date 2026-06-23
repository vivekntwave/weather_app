export function getTemperatureClass(temp) {
    if (temp <= 10) {
      return "weather-card__temp--cold";
    }
  
    if (temp >= 25) {
      return "weather-card__temp--hot";
    }
  
    return "weather-card__temp--mild";
  }