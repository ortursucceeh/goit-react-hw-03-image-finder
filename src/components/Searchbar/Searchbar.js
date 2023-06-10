import { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };

  render() {
    return (
      <header className={css['Searchbar']}>
        <form className={css['SearchForm']} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {};

export default Searchbar;
