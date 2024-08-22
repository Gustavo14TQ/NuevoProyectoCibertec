// src/App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Importa Navigate correctamente
import Header from './componentes/Header';
import Conocenos from './paginas/Conocenos/Conocenos';
import Sectores from './paginas/Sectores/Sectores';
import Blog from './paginas/Blog/Blog';
import Contactos from './paginas/Contactos/Contactos';
import Presupuesto from './paginas/Presupuesto/Presupuesto';
import Proyectos from './paginas/Proyectos/Proyectos';
import Servicios from './paginas/Servicios/Servicios';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/conocenos" />} /> {/* Redirige a la página inicial */}
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/sectores" element={<Sectores />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/presupuesto" element={<Presupuesto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/servicios" element={<Servicios to="/Servicios" />} />
      </Routes>
    </>
  );
}

export default App;
