import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import css from './App.module.css'

export class App extends Component {

  handleSubmitButton = () => {
    return
  }

  render() {
    return (
      <div className={css['App']}>
        <Searchbar onSubmit={this.handleSubmitButton} />
      </div>
    );
  }
};

export default App;
