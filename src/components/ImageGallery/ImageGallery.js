import { useState, useEffect, useRef } from 'react';
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

const ImageGallery = ({ searchText }) => {
  const [images, setImages] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImageURL, setModalImageURL] = useState('');

  const prevSearchText = useRef(searchText);
  const prevPage = useRef(page);

  const openModal = ({ target }) => {
    setModalImageURL(target.dataset.largeimgurl);
  };

  const closeModal = () => setModalImageURL('');

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const loadImages = loadType => {
      const searchPage = loadType === LOAD_TYPE.NEW ? 1 : page;

      setImages(prevImages => (loadType === LOAD_TYPE.NEW ? [] : prevImages));
      setIsLoading(true);

      getImages(searchText, searchPage)
        .then(response => response.json())
        .then(data => {
          setImages(prevImages =>
            loadType === LOAD_TYPE.NEW ? [...data.hits] : [...prevImages, ...data.hits]
          );
          setPage(prevPage => (loadType === LOAD_TYPE.NEW ? 1 : prevPage));
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    };

    if (prevPage.current < page && prevSearchText.current === searchText) {
      loadImages(LOAD_TYPE.LOAD_MORE);
    } else if (prevSearchText.current !== searchText) {
      loadImages(LOAD_TYPE.NEW);
    }

    prevPage.current = page;
    prevSearchText.current = searchText;
  }, [searchText, page]);

  return (
    <>
      {images.length > 0 && (
        <>
          <ul className={css.gallery}>
            {images.map(itemImage => (
              <ImageGalleryItem
                key={itemImage.id}
                webformatURL={itemImage.webformatURL}
                largeImageURL={itemImage.largeImageURL}
                openModal={openModal}
              />
            ))}
          </ul>
          {!isLoading && <Button loadMore={loadMore} />}
        </>
      )}
      {isLoading && <Loader />}
      {modalImageURL && <Modal largeImageURL={modalImageURL} closeModal={closeModal} />}
    </>
  );
};

export default ImageGallery;
