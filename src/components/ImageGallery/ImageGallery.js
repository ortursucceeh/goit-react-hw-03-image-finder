import { Component } from 'react';
import css from './ImageGallery.module.css';
import { getImages } from 'services/getImages';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
  };

  loadImages = () => {
    this.setState({ isLoading: true });
    getImages(this.props.searchText, this.state.page)
      .then(response => response.json())
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
        }))
      )
      .catch(error => {
        console.log(error);
      })
      .finally(
        this.setState({
          isLoading: false,
        })
      );
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchText !== this.props.searchText ||
      prevState.page !== this.state.page
    ) {
      this.loadImages();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, page } = this.state;

    return (
      <>
        {isLoading && <Loader />}
        {images.length > 0 && (
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
            <Button loadMore={this.loadMore} page={page} />
          </>
        )}
      </>
    );
  }
}

export default ImageGallery;
