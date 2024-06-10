import React from 'react';
import { Link } from 'react-router-dom';
import './_error.scss';

const Error = () => {

  const isMobile = window.innerWidth <= 425;
  const errorSubtitle = isMobile ? 
    "Oups! La page que \nvous demandez n'existe pas."
    : 
    "Oups! La page que vous demandez n'existe pas.";
  
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__subtitle">{errorSubtitle}</p>
      <Link to="/" className="error-page__link">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default Error;
