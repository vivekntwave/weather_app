export default function createSearch() {
    return `
      <section class="search">
        <input
          class="search__input"
          type="text"
          placeholder="Search for a city or meteorological station..."
        />
  
        <button class="search__button">
          Search
        </button>
      </section>
    `;
  }