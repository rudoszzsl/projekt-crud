function SearchBar({ onSearch, onOnlyAvailableChange }) {
    return (
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Szukaj po marce..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="form-check mt-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="onlyAvailable"
            onChange={(e) => onOnlyAvailableChange(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="onlyAvailable">
            Pokaż tylko dostępne
          </label>
        </div>
      </div>
    )
  }
  
  export default SearchBar
  