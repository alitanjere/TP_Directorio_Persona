import React, { useState, useEffect } from 'react';
import PersonaCard from '../../components/PersonaCard/PersonaCard'; // Will be created in the next step
import personasData from '../../data/Personas.json';
import './HomePage.css'; // For HomePage specific styles

const HomePage = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    // For this project, we're directly importing the JSON.
    // In a real app, you might fetch from an API here.
    setPersonas(personasData);
  }, []);

  return (
    <div className="home-page">
      <h1>Lista de Personas</h1>
      {personas.length > 0 ? (
        <div className="personas-list">
          {personas.map(persona => (
            <PersonaCard key={persona.id} persona={persona} />
          ))}
        </div>
      ) : (
        <p>No hay personas para mostrar.</p>
      )}
    </div>
  );
};

export default HomePage;
