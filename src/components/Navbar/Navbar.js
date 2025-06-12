import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this for Navbar specific styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item brand-text">Directorio App</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Inicio</Link>
        <Link to="/estadisticas" className="navbar-item">Estadísticas</Link>
        <Link to="/contacto" className="navbar-item">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
