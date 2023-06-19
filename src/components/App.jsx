import { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import css from './App.module.css'

export const App = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (searchValue) => {
    setSearchText(searchValue)
  }

  return (
    <div className={css.App}>
      <Searchbar handleSearch={handleSearch} />
      <ImageGallery searchText={searchText} />
    </div>
  );
};

export default App;
