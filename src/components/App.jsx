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
    return (
      <div className={css['App']}>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery searchText={this.state.searchText} />
      </div>
    );
  }
};

export default App;
