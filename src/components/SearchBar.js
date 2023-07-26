import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div class="container">
      <form onSubmit={handleFormSubmit}>
        <div class="search">
          <div class="row">
            <div class="col">
              <div class="search-1">
                <i class='bx bx-search-alt'></i>
                <input value={term} onChange={handleChange} type="text" placeholder="Seach images with keywords"/>
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
