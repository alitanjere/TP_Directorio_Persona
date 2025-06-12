import React from 'react';
import { Link } from 'react-router-dom';
import './PersonaCard.css'; // For PersonaCard specific styles

const PersonaCard = ({ persona }) => {
  if (!persona) {
    return <p>No hay datos de persona.</p>;
  }

  return (
    <div className="persona-card">
      <h3>{persona.nombre}</h3>
      <p>Edad: {persona.edad}</p>
      <Link to={`/persona/${persona.id}`} className="button-like">
        Ver más
      </Link>
    </div>
  );
};

export default PersonaCard;
