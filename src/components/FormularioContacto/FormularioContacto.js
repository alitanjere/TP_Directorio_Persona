import React, { useState } from 'react';
import './FormularioContacto.css'; // For FormularioContacto specific styles

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    edad: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.nombre.trim()) {
      tempErrors.nombre = "El nombre es obligatorio.";
      isValid = false;
    }
    if (!formData.apellido.trim()) {
      tempErrors.apellido = "El apellido es obligatorio.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "El email es obligatorio.";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "El formato del email no es válido.";
      isValid = false;
    }
    if (!formData.edad) {
      tempErrors.edad = "La edad es obligatoria.";
      isValid = false;
    } else if (isNaN(formData.edad) || Number(formData.edad) <= 0) {
      tempErrors.edad = "La edad debe ser un número positivo.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Optionally, clear error for a field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulario enviado:", formData);
      // Here you would typically send data to a server
      setIsSubmitted(true);
      setFormData({ nombre: '', apellido: '', email: '', edad: '' }); // Reset form
      setErrors({});
      // Hide success message after some time
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      {isSubmitted && <p className="success-message">¡Formulario enviado con éxito!</p>}

      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <p className="error-message">{errors.nombre}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        {errors.apellido && <p className="error-message">{errors.apellido}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          id="edad"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
        />
        {errors.edad && <p className="error-message">{errors.edad}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContacto;
