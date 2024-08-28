import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'; // Asegúrate de importar useLocation
import Header from './componentes/Header';
import Conocenos from './paginas/Conocenos/Conocenos';
import Sectores from './paginas/Sectores/Sectores';
import Blog from './paginas/Blog/Blog';
import Contactos from './paginas/Contactos/Contactos';
import Presupuesto from './paginas/Presupuesto/Presupuesto';
import Proyectos from './paginas/Proyectos/Proyectos';
import Servicios from './paginas/Servicios/Servicios';
import PaginaSector from './paginas/Sectores/subpaginas/PaginaSector';

function App() {
  const location = useLocation(); // Ahora useLocation se puede usar aquí

  // Define las rutas en las que no se debe mostrar el Header
  const hideHeaderRoutes = ['/paginasector'];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/blog" />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/sectores" element={<Sectores />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/presupuesto" element={<Presupuesto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/paginasector" element={<PaginaSector />} />
      </Routes>
    </>
  );
}

export default App;
