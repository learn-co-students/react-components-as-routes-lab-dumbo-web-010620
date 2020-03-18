import React from 'react';
import { directors } from '../data';

const Directors = (props) => {
  props = directors
  const renderDirectors = () => {
  return props.map(obj => 
    <div>
      <h1>Name: {obj.name}</h1>
        <ul>
  Movies:<ul>{obj.movies.map(movie =>  { return <li>{movie}</li>})} </ul>
        </ul>
    
    </div>
    )
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
