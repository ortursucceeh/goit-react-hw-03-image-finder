import { useState } from 'react';
import propTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = props => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSearch(searchValue);
  };

  return (
    <header className={css.searchbar}>
      <h1>ImageFinder 📷</h1>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={searchValue}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleSearch: propTypes.func.isRequired,
};

export default Searchbar;
