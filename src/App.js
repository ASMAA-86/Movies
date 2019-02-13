import React, { Component } from "react";
import "./App.css";
import Movie from "./movie";
import MovieList from "./movieList";
import Cast from "./Cast";
class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
}

export default App;
