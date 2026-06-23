import createNavbar from "./navbar";
import createFooter from "./footer";
import createWeatherPage from "./weatherPage";
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