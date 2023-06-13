import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <button className={css['Button']} onClick={loadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};

export default Button;
