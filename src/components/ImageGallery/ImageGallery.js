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
    this.setState({ isLoading: true });
    getImages(this.props.searchText, this.state.page)
      .then(response => response.json())
      .then(data =>
        this.setState(prevState => ({
          images:
            loadType === 'loadMore'
              ? [...prevState.images, ...data.hits]
              : [...data.hits],
          page: loadType === 'loadMore' ? prevState.page : 1,
          isLoading: false,
        }))
      )
      .catch(error => {
        console.log(error);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText)
      this.loadImages(LOAD_TYPE.NEW);
    else if (prevState.page !== this.state.page) {
      this.loadImages(LOAD_TYPE.LOAD_MORE);
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, page, modalImageURL } = this.state;
    return (
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
        {images.length > 0 &&
          (isLoading ? (
            <Loader />
          ) : (
            <Button loadMore={this.loadMore} page={page} />
          ))}
        {modalImageURL && (
          <Modal largeImageURL={modalImageURL} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default ImageGallery;
