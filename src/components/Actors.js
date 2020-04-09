import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let allActors = actors.map(actorPOJO => {
    return <div key={actorPOJO.name}> 
      Actor: {actorPOJO.name} <br/>
      Movies: {actorPOJO.movies.map( 
        movie => <ul key={movie}>{movie}</ul>
      )}
    </div>
  })
  return (
    <div>
        <h1>Actors Page</h1>
        {allActors}
    </div>
  );
};

export default Actors;
