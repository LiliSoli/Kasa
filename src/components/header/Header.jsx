import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <nav className="header__nav">
        <NavLink to="/" end className="header__nav__nav-link">Accueil</NavLink>
        <NavLink to="/about" className="header__nav__nav-link">A propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;

