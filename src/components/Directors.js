import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorMap=()=>{
    return directors.map(director=>(
      <div>
        {director.name}<br/>
        {director.movies}
      </div>
    ))
  }
  return (
    <div>
      <h1>
        Directors Page
      </h1>
      {directorMap()}
    </div>
  );
}

export default Directors
