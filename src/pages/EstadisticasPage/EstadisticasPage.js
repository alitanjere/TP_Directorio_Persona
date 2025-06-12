import React from 'react';
import personasData from '../../data/Personas.json';
import './EstadisticasPage.css'; // For EstadisticasPage specific styles

const EstadisticasPage = () => {
  if (!personasData || personasData.length === 0) {
    return <p>No hay datos de personas para calcular estadísticas.</p>;
  }

  const totalPersonas = personasData.length;
  const mayoresDe35 = personasData.filter(p => p.edad > 35).length;

  let masVieja = [personasData[0]];
  let masJoven = [personasData[0]];

  for (let i = 1; i < personasData.length; i++) {
    if (personasData[i].edad > masVieja[0].edad) {
      masVieja = [personasData[i]];
    } else if (personasData[i].edad === masVieja[0].edad) {
      masVieja.push(personasData[i]);
    }

    if (personasData[i].edad < masJoven[0].edad) {
      masJoven = [personasData[i]];
    } else if (personasData[i].edad === masJoven[0].edad) {
      masJoven.push(personasData[i]);
    }
  }

  const sumaEdades = personasData.reduce((acc, p) => acc + p.edad, 0);
  const promedioEdad = (sumaEdades / totalPersonas).toFixed(2);

  return (
    <div className="estadisticas-page">
      <h2>Estadísticas de Personas</h2>
      <ul className="estadisticas-list">
        <li><strong>Total de Personas:</strong> {totalPersonas}</li>
        <li><strong>Personas mayores de 35 años:</strong> {mayoresDe35}</li>
        <li>
          <strong>Persona(s) de Mayor Edad ({masVieja[0].edad} años):</strong>
          <ul>
            {masVieja.map(p => <li key={p.id} className="sub-item">{p.nombre}</li>)}
          </ul>
        </li>
        <li>
          <strong>Persona(s) de Menor Edad ({masJoven[0].edad} años):</strong>
          <ul>
            {masJoven.map(p => <li key={p.id} className="sub-item">{p.nombre}</li>)}
          </ul>
        </li>
        <li><strong>Promedio de Edad General:</strong> {promedioEdad} años</li>
      </ul>
    </div>
  );
};

export default EstadisticasPage;
