import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='page-title'>
        <Link to="/">Captain's Log</Link>
      </h1>
      <button className='submit'>
        <Link to="/logs/new">NEW LOG</Link>
      </button>
    </nav>
  )
}

export default Navbar