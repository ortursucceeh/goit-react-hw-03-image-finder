const API_KEY = '37178336-80a4e3c3ad925fb195971f3c2';
const BASE_URL = `https://pixabay.com/api`;
// const API_URL_1 = `/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`;

export const getImages = searchText => {
  return fetch(
    `${BASE_URL}/?q=${searchText}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
