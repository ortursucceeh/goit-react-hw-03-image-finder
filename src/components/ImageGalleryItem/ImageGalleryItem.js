import css from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className={css['ImageGalleryItem']}>
      <img
        className={css['ImageGalleryItem-image']}
        src={webformatURL}
        alt={webformatURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string.isRequired,
  largeImageURL: propTypes.string.isRequired,
};

export default ImageGalleryItem;
