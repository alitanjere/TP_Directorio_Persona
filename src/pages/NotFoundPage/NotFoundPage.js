import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // For NotFoundPage specific styles

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>No encontramos lo que buscás 😕</h2>
      <p>La página que intentas visitar no existe o ha sido movida.</p>
      <Link to="/" className="button-like">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
