import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import css from './App.module.css'

export class App extends Component {
  state = {
    searchText: '',
  }

  handleSearch = (searchText) => {
    this.setState({searchText})
  }

  render() {
    const { searchText} = this.state;

    return (
      <div className={css['App']}>
        <Searchbar onSubmit={this.handleSubmitButton} handleSearch={this.handleSearch} />
        <ImageGallery searchText={searchText} />
      </div>
    );
  }
};

export default App;
