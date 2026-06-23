export default function createNavbar(){
    return `<nav class="navbar">
    <p class="navbar__logo"> Weather App </p>
    <div class="navbar__links">
        <a class="navbar__link" href="/">Dashboard</a>
        <a class="navbar__link" href="/">Map</a>
        <a class="navbar__link" href="/">Education</a>
        <a class="navbar__link" href="/">Historical</a>
    </div>
    <button class="navbar__theme-toggle" id="theme-toggle">
        <i class="fa-solid fa-sun"></i>
    </button>
</nav>`
}