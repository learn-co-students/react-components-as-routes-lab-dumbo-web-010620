import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movieMap=()=>{
    return movies.map(movie=>(
      <div>
        {movie.title}<br/>
        {movie.time}<br/>
        {movie.genres}<br/>
        {movie.metascore}
      </div>
    ))
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {movieMap()}
    </div>
  );
};

export default Movies;
