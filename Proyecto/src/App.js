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
import Ventana from './paginas/Servicios/ventanas/Ventana';
import Ventana1 from './paginas/Servicios/ventanas/Ventana-1';
import Ventana2 from './paginas/Servicios/ventanas/ventana2';
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
        <Route path="/paginasector" element={<PaginaSector />} />
        <Route path="/servicios" element={<Servicios to="/Servicios" />} />
        <Route path="/ventana" element={<Ventana to="/ventana" />} />
        <Route path="/ventana1" element={<Ventana1 to="/ventana1" />} />
        <Route path="/ventana2" element={<Ventana2 to="/ventana2" />} />
      </Routes>
    </>
  );
}

export default App;
