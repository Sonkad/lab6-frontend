import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#A9D6E5', padding: '10px' }}>
      <Link to="/home" style={{ margin: '10px' }}>Home</Link>
      <Link to="/albums" style={{ margin: '10px' }}>Albums</Link>
      <Link to="/users" style={{ margin: '10px' }}>Users</Link>
      <Link to="/photos" style={{ margin: '10px' }}>Photos</Link>
      <Link to="/todos" style={{ margin: '10px' }}>Todos</Link>
      <Link to="/error" style={{ margin: '10px' }}>Error Page</Link>
    </nav>
  );
};

export default Navbar;
