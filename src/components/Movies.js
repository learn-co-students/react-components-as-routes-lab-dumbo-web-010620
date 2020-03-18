import React from 'react';
import { movies } from '../data';
import { render } from 'enzyme';

const Movies = (props) => {
  props = movies
const renderMovies = () => {
    return props.map(movieObj => 
    <div>
      <h1>Title: {movieObj.title}</h1>
    <p>Time: {movieObj.time} Mins</p>
    <p>Rating: {movieObj.metascore}</p>
      <ul> Genres: 
        {movieObj.genres.map(genre => 
        <ul> 
          <li>{genre}</li>

        </ul>)}
      </ul>

    </div>
    )
  }
  console.log(props)
  return (
    <div>
       <h1>Movies Page</h1>
       {renderMovies()}
    </div>
  );
};

export default Movies;
