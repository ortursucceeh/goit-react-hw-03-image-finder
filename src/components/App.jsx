import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import css from './App.module.css'
import Loader from "./Loader/Loader";

export class App extends Component {
  state = {
    searchText: '',
    isLoading: false,
  }

  handleSearch = (searchText) => {
    this.setState({searchText})
  }

  render() {
    const { searchText, isLoading } = this.state;

    return (
      <div className={css['App']}>
        <Searchbar onSubmit={this.handleSubmitButton} handleSearch={this.handleSearch} />
        {isLoading ? <Loader /> : <ImageGallery searchText={searchText} />}
      </div>
    );
  }
};

export default App;
