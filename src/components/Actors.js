import React from 'react';
import { actors } from '../data';
import { render } from 'enzyme';

const Actors = (props) => {
  props = actors
  const renderActors = () => {
  return props.map(obj => 
    <div>
      <h1>Name: {obj.name}</h1>
        <ul>
  Movies:<ul>{obj.movies.map(movie =>  { return <li>{movie}</li>})} </ul>
        </ul>
    
    </div>
  )
  }
  console.log(renderActors())
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
