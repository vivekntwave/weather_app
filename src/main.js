import createNavbar from "./components/navbar";
import createFooter from "./components/footer";
import createWeatherPage from "./components/weatherPage";
import { getCoordinates, getWeather } from "./api/weatherApi";
import "./style.css";
import { createIcons, icons} from "lucide";
import renderAll from "../utils/renderer";

const LAST_CITY_KEY = "lastSearchedCity";
document.getElementById("navbar-container").innerHTML = createNavbar();
document.querySelector("main").innerHTML =
  createWeatherPage(null);
document.getElementById("footer-container").innerHTML = createFooter();

const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");
let currentWeather = null;
let selectedDayIndex = 0;
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  icon.classList.replace("fa-sun", "fa-moon");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (isDark) {
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
  }
});

const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const resetButton = document.getElementById("reset-button");
const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");

const savedCity = localStorage.getItem(LAST_CITY_KEY);

if (savedCity) {
  cityInput.value = savedCity;
  loadWeatherForCity(savedCity);
}

async function loadWeatherForCity(city) {
  if (!city) return;

  setLoadingState(true);
  loadingMessage.classList.remove("hidden");
  errorMessage.classList.add("hidden");

  try {
    const location = await getCoordinates(city);
    const weather = await getWeather(location.latitude, location.longitude);

    const enrichedWeather = {
      ...weather,
      city: location.name,
      country: location.country
    };

    currentWeather = enrichedWeather;
    selectedDayIndex = 0;

    localStorage.setItem(LAST_CITY_KEY, location.name);
    cityInput.value = location.name;

    renderAll(enrichedWeather);
    createIcons({ icons });

    errorMessage.classList.add("hidden");
    errorMessage.textContent = "";
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.classList.remove("hidden");
  } finally {
    loadingMessage.classList.add("hidden");
    setLoadingState(false);
  }
}

function setLoadingState(isLoading) {
  searchButton.disabled = isLoading;
  resetButton.disabled = isLoading;
  cityInput.disabled = isLoading;
}

function resetApp() {
  localStorage.removeItem(LAST_CITY_KEY);

  currentWeather = null;
  selectedDayIndex = 0;
  cityInput.value = "";

  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");
  loadingMessage.classList.add("hidden");

  document.getElementById("weather-card-container").innerHTML = "";
  document.getElementById("forecast-container").innerHTML = `
    <section class="forecast">
      <p>Search for a city to see the forecast</p>
    </section>
  `;
  document.getElementById("insights-container").innerHTML = "";
}

resetButton.addEventListener("click", resetApp);

function searchWeather() {
  const city = cityInput.value.trim();
  loadWeatherForCity(city);
}

document.addEventListener("click", (e) => {
  const row = e.target.closest(".insights__row");
  if (!row) return;

  const index = Number(row.dataset.index);

  if (!currentWeather) return;

  renderAll(currentWeather, index, selectedDayIndex);
  createIcons({ icons });

  document.querySelectorAll(".insights__row")
    .forEach(el => el.classList.remove("active"));

  row.classList.add("active");
});

document.addEventListener("click", (e) => {
  const day = e.target.closest(".forecast__day");
  if (!day || !currentWeather) return;

  selectedDayIndex = Number(day.dataset.dayIndex);
  renderAll(currentWeather, null, selectedDayIndex);
  createIcons({ icons });
});

searchButton.addEventListener("click", searchWeather);

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchWeather();
  }
});