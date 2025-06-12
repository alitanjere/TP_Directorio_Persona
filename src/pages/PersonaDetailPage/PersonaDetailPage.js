import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import personasData from '../../data/Personas.json';
import './PersonaDetailPage.css'; // Styles created in a previous step

const PersonaDetailPage = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);
  const [edadInfo, setEdadInfo] = useState('');

  useEffect(() => {
    const personaEncontrada = personasData.find(p => p.id === parseInt(id));
    setPersona(personaEncontrada);

    if (personaEncontrada) {
      if (personaEncontrada.edad >= 18) {
        setEdadInfo('Es mayor de edad.');
      } else {
        setEdadInfo('Es menor de edad.');
      }
    }
  }, [id]);

  if (!persona) {
    return (
      <div className="persona-detail-page">
        <h2>Persona no encontrada</h2>
        <p>No se pudo encontrar la persona con el ID: {id}</p>
        <Link to="/" className="button-like">Volver al Inicio</Link>
      </div>
    );
  }

  return (
    <div className="persona-detail-page">
      <h2>{persona.nombre}</h2>
      <div className="persona-info">
        <p><strong>ID:</strong> {persona.id}</p>
        <p><strong>Email:</strong> {persona.email}</p>
        <p><strong>Edad:</strong> {persona.edad} años</p>
      </div>
      {edadInfo && <p className="age-message">{edadInfo}</p>}
      <Link to="/" className="button-like">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default PersonaDetailPage;
