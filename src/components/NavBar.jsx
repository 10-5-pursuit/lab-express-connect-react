import { Link } from 'react-router-dom';
import React from 'react'; 

const NavBar = () => {
  return (
    <nav className='navbar'>
      <h1>
        <Link to='/logs'>Captain's Log</Link>
      </h1>
      <ul>
        <li>
          <Link to='/logs'>Logs</Link>
        </li>
        <li>
          <Link to='/logs/new'>New Log</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
