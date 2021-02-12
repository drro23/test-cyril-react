import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <header class="top-nav">
      <h1>Seminarin</h1>
      <nav className="nav">
        <ul className="nav__menu">
            <li className="menu__link"><Link to="/">Home</Link></li>
            <li className="menu__link"><Link to="/events">Events</Link></li>
            <li className="menu__link"><Link to="/features">Features</Link></li>
            <li className="menu__link"><Link to="/demos">Demos</Link></li>
            <li className="menu__link"><Link to="/contact">Contact us</Link></li>
          </ul>
      </nav>
    </header>
    )
}

export default NavBar;