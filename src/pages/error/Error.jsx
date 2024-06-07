import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__subtitle">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-page__link">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default Error;
