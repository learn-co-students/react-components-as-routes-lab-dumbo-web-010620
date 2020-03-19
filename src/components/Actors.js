import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorMap=()=>{
    return actors.map(actor=>
      (<div className="actor">
        {actor.name}<br/>
        {actor.movies}<br/>
      </div>)
    )
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {actorMap()}
    </div>
  );
};

export default Actors;
