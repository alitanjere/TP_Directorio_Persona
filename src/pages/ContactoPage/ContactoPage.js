import React from 'react';
import FormularioContacto from '../../components/FormularioContacto/FormularioContacto';
import './ContactoPage.css';

const ContactoPage = () => {
  return (
    <div className="contacto-page">
      <h2>Formulario de Contacto</h2>
      <p>Por favor, completa el siguiente formulario.</p>
      <FormularioContacto />
    </div>
  );
};

export default ContactoPage;
