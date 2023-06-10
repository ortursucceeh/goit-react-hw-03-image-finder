import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ loadMore, page }) => {
  return (
    <button className={css['Button']} onClick={() => loadMore(page)}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
  page: PropTypes.number.isRequired,
};

export default Button;
