import { Component } from 'react';
import css from './ImageGallery.module.css';
import { getImages } from 'services/getImages';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';

class ImageGallery extends Component {
  state = {
    images: null,
    curPage: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      getImages(this.props.searchText)
        .then(response => response.json())
        .then(images => this.setState({ images: images.hits }));
    }
  }

  render() {
    const { images } = this.state;

    return (
      images && (
        <>
          <ul className={css['ImageGallery']}>
            {images.map(itemImage => (
              <ImageGalleryItem
                key={itemImage.id}
                webformatURL={itemImage.webformatURL}
                largeImageURL={itemImage.largeImageURL}
              />
            ))}
          </ul>
          <Button />
        </>
      )
    );
  }
}

export default ImageGallery;
