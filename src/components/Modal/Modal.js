import { useEffect } from 'react';
import css from './Modal.module.css';
import propTypes from 'prop-types';

const Modal = ({ closeModal, largeImageURL }) => {
  useEffect(() => {
    const handlePressESC = e => {
      if (e.code === 'Escape') closeModal();
      console.log('close');
    };

    window.addEventListener('keydown', handlePressESC);

    return () => window.removeEventListener('keydown', handlePressESC);
  }, [closeModal]);

  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={largeImageURL} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: propTypes.func.isRequired,
  largeImageURL: propTypes.string.isRequired,
};

export default Modal;
