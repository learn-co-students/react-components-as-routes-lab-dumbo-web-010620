import React from 'react';
import { movies } from '../data';

const Movies = () => {

  let allMovies = movies.map(moviePOJO => 
    <div key={moviePOJO.title} > 
      Title: {moviePOJO.title} <br/>
      Runtime: {moviePOJO.time} <br/>
      Genres: {moviePOJO.genres.map(genre => <ul key={genre}> {genre} </ul>)} 
      Metascore: {moviePOJO.metascore? moviePOJO.metascore : "no metascore available"}  
      <br/><br/>
    </div>)

  return (
    <div>
        <h1>Movies Page</h1>
        {allMovies}
    </div>
  );
};

export default Movies;
