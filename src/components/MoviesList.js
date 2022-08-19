import React from 'react'
import MovieShow from './MovieShow'
import {Link} from 'react-router-dom'



function MoviesList({ movies }) {
  const movie = Object.keys(movies).map(movie => (
    <li key={movie}>
      <Link to={`/movies/${movie}`}>{movies[movie].title}</Link>
    </li>
  ));

  return <ul>{movie}</ul>;
}

export default MoviesList;