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
import Ventana from './paginas/Servicios/ventanas/Ventana';
import Ventana1 from './paginas/Servicios/ventanas/Ventana-1';
import Ventana2 from './paginas/Servicios/ventanas/ventana2';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/blog" />} /> {/* Redirige a la página inicial */}
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/sectores" element={<Sectores />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/presupuesto" element={<Presupuesto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/servicios" element={<Servicios to="/Servicios" />} />
        <Route path="/ventana" element={<Ventana to="/ventana" />} />
        <Route path="/ventana1" element={<Ventana1 to="/ventana1" />} />
        <Route path="/ventana2" element={<Ventana2 to="/ventana2" />} />
      </Routes>
    </>
  );
}

export default App;
