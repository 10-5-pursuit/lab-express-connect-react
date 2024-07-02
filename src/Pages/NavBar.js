import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h1>
                <Link to ="/captains">Captains's Logs</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/captains/new">Add Captain</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;