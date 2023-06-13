import { Component } from 'react';
import { getImages } from 'services/getImages';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from 'components/Modal/Modal';

const LOAD_TYPE = {
  NEW: 'new',
  LOAD_MORE: 'loadMore',
};

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    modalImageURL: '',
  };

  openModal = ({ target }) => {
    this.setState({ modalImageURL: target.dataset.largeimgurl });
  };

  closeModal = () => {
    this.setState({ modalImageURL: '' });
  };

  loadImages = loadType => {
    const searchPage = loadType === LOAD_TYPE.NEW ? 1 : this.state.page;

    this.setState(prevState => ({
      isLoading: true,
      images: loadType === LOAD_TYPE.NEW ? [] : prevState.images,
    }));

    getImages(this.props.searchText, searchPage)
      .then(response => response.json())
      .then(data =>
        this.setState(prevState => ({
          images: loadType === LOAD_TYPE.NEW ? [...data.hits] : [...prevState.images, ...data.hits],
          page: loadType === LOAD_TYPE.NEW ? 1 : prevState.page,
          isLoading: false,
        }))
      )
      .catch(error => {
        console.log(error);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchText = prevProps.searchText;
    const currentSearchText = this.props.searchText;
    if (prevState.page < this.state.page && prevSearchText === currentSearchText) {
      this.loadImages(LOAD_TYPE.LOAD_MORE);
    } else if (prevSearchText !== currentSearchText) {
      this.loadImages(LOAD_TYPE.NEW);
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, modalImageURL } = this.state;

    return (
      <>
        {images.length > 0 && (
          <>
            <ul className={css['ImageGallery']}>
              {images.map(itemImage => (
                <ImageGalleryItem
                  key={itemImage.id}
                  webformatURL={itemImage.webformatURL}
                  largeImageURL={itemImage.largeImageURL}
                  openModal={this.openModal}
                />
              ))}
            </ul>
            {!isLoading && <Button loadMore={this.loadMore} />}
          </>
        )}
        {isLoading && <Loader />}
        {modalImageURL && <Modal largeImageURL={modalImageURL} closeModal={this.closeModal} />}
      </>
    );
  }
}

export default ImageGallery;
