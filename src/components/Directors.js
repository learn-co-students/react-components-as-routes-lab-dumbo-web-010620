import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const allDirectors = directors.map(
    directorPOJO => <div key={directorPOJO.name}>
      Name: {directorPOJO.name} <br/>
      Movies: {directorPOJO.movies.map(movie =>
      <ul key={movie}>{movie}</ul>)}
    </div>
  )
  return (
    <div>
        <h1>Directors Page</h1>
        {allDirectors}
    </div>
  );
}

export default Directors
