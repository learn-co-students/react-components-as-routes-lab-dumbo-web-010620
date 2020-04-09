import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const darkBlue = {
  background: "darkblue"
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/" exact
      style={linkStyle}
      activeStyle={darkBlue}
      >
      Home
      </NavLink>

      <NavLink
      to='/movies' exact
      style={linkStyle}
      activeStyle={darkBlue}
      >
        Movies
      </NavLink>
      
      <NavLink
      to='/directors' exact
      style={linkStyle}
      activeStyle={darkBlue}
      >
        Directors
      </NavLink>

      <NavLink
      to='/actors' exact
      style={linkStyle}
      activeStyle={darkBlue}
      >
        Actors
      </NavLink>
      
    </div>
  );
};

export default NavBar;
