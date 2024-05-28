import React from 'react';
import logo from '../../assets/images/logo-white.svg';

function Footer() {
  return (
    <div className="footer">
        <img src={logo} className="footer__logo" alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
};

export default Footer;