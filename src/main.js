import createNavbar from "./components/navbar";
import createFooter from "./components/footer";
import createWeatherPage from "./components/weatherPage";
import { getCoordinates, getWeather } from "./api/weatherApi";
import "./style.css";

document.getElementById("navbar-container").innerHTML = createNavbar();
document.querySelector("main").innerHTML =
  createWeatherPage();
document.getElementById("footer-container").innerHTML = createFooter();

const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

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
const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");

async function searchWeather() {
  const city = cityInput.value.trim();

  if (!city) {
    return;
  }

  loadingMessage.classList.remove("hidden");
  errorMessage.classList.add("hidden");

  try {
    const location = await getCoordinates(city);

    const weather = await getWeather(
      location.latitude,
      location.longitude
    );

    console.log("Location:", location);
    console.log("Weather:", weather);

    // Success -> clear previous errors
    errorMessage.classList.add("hidden");
    errorMessage.textContent = "";
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.classList.remove("hidden");
  } finally {
    loadingMessage.classList.add("hidden");
  }
}

searchButton.addEventListener("click", searchWeather);

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchWeather();
  }
});