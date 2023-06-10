const API_KEY = '37178336-80a4e3c3ad925fb195971f3c2';
const BASE_URL = `https://pixabay.com/api`;

export const getImages = (searchText, page) => {
  return fetch(
    `${BASE_URL}/?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=6`
  );
};
