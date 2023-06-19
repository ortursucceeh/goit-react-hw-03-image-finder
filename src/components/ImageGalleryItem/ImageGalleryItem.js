import css from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, openModal }) => {
  return (
    <li className={css.item}>
      <img
        className={css.itemImage}
        src={webformatURL}
        alt={webformatURL}
        data-largeimgurl={largeImageURL}
        onClick={openModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string.isRequired,
  largeImageURL: propTypes.string.isRequired,
  openModal: propTypes.func.isRequired,
};

export default ImageGalleryItem;
