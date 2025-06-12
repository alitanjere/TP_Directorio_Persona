import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import PersonaDetailPage from './pages/PersonaDetailPage/PersonaDetailPage';
import EstadisticasPage from './pages/EstadisticasPage/EstadisticasPage';
import ContactoPage from './pages/ContactoPage/ContactoPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'; // Ensure this import is correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="persona/:id" element={<PersonaDetailPage />} />
          <Route path="estadisticas" element={<EstadisticasPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
