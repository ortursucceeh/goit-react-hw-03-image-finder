import { Component } from 'react';
import css from './Modal.module.css';
import propTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handlePressESC);
  };

  handlePressESC = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };

  render() {
    return (
      <div className={css['Overlay']}>
        <div className={css['Modal']}>
          <img src={this.props.largeImageURL} alt="largeImageURL" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: propTypes.func.isRequired,
  largeImageURL: propTypes.string.isRequired,
};

export default Modal;
