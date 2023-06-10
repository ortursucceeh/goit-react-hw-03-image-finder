import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL } = this.props;

    return (
      <li className={css['ImageGalleryItem']}>
        <img
          className={css['ImageGalleryItem-image']}
          src={webformatURL}
          alt={webformatURL}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
