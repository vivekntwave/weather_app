export default function createSearch() {
  return `
    <section class="search">
      <input
        id="city-input"
        class="search__input"
        type="text"
        placeholder="Search for a city..."
      />

      <button
        id="search-button"
        class="search__button"
      >
        Search
      </button>

      <p id="loading-message" class="search__loading hidden">
        Loading...
      </p>

      <p id="error-message" class="search__error hidden"></p>
    </section>
  `;
}