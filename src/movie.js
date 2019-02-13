import React, { Component } from "react";
import Review from "./review";
import Cast from "./Cast";
class Movie extends Component {
  render() {
    const casts = Movie.cast.map(crew => {
      return <Cast crewData={crew} />;
    });

    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <p>{this.props.movie.description}</p>
        <p>
          <strong>{this.props.movie.rating}</strong>
        </p>
        <p>{this.props.movie.director}</p>
        <img src={this.props.movie.poster} />
        <br />
        <br />
        <strong>Rating:PG</strong>
        <p>
          "a a lot of things happened in thos movie you will find many things ,
          is a great choice for the family we are like it and we hope you will
          like it too.
        </p>
        <Review />
        <div>{casts}</div>
      </div>
    );
  }
}
export default Movie;
