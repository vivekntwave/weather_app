export default function createInsights(weather, dayIndex = 0) {
  if (!weather) return "";

  const selectedDay = weather.daily.time[dayIndex];
  const dayStartIdx = weather.hourly.time.findIndex(t => t.startsWith(selectedDay));

  if (dayStartIdx === -1) return "";

  const nowPrefix = new Date().toISOString().slice(0, 13);
  const currentHourIdx = weather.hourly.time.findIndex(t => t.startsWith(nowPrefix));

  const startIdx =
    dayIndex === 0 && currentHourIdx !== -1
      ? currentHourIdx
      : dayStartIdx;

  const rows = weather.hourly.time
    .slice(startIdx, startIdx + 6)
    .map((time, index) => {
      const actualIdx = startIdx + index;

      return `
        <div class="insights__row" data-index="${actualIdx}" data-day-index="${dayIndex}">
          <span>${new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
          <span>${generateInsight(
            weather.hourly.weather_code[actualIdx],
            weather.hourly.relative_humidity_2m[actualIdx]
          )}</span>
          <span>${weather.hourly.temperature_2m[actualIdx]}°C</span>
        </div>
      `;
    })
    .join("");

  return `<section class="insights">${rows}</section>`;
}

function generateInsight(code, humidity) {
  if (humidity > 80) {
    return "High Humidity";
  }

  if ([51, 53, 55, 61, 63, 65].includes(code)) {
    return "Precipitation Expected";
  }

  if ([1, 2, 3].includes(code)) {
    return "Developing Cloud Cover";
  }

  if (code === 0) {
    return "Clear Sky Conditions";
  }

  return "Stable Weather";
}