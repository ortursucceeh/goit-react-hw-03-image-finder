import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {};

  render() {
    return (
      <header className={css['Searchbar']}>
        <form className={css['SearchForm']}>
          <button
            type="submit"
            className={css['SearchForm-button']}
            onSubmit={this.props.onSubmit}
          >
            <span className={css['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {};

export default Searchbar;
