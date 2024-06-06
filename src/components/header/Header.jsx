import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/LOGO.png';

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  )
};

export default Header;
