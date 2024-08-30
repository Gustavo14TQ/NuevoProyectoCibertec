import React from 'react';
import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'; // Asegúrate de importar useLocation
import Header from './componentesgenerales/Header';
import Footer from './componentesgenerales/Footer';

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
import PaginaConocenos from './paginas/Conocenos/PaginaConocenos';



function App() {
  const location = useLocation(); // Ahora useLocation se puede usar aquí

  // Define las rutas en las que no se debe mostrar el Header
  const hideHeaderRoutes = ['/paginasector'];
  const hideFooterRoutes = ['/servicios'];
  
  return (
    <div className='app-container'>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Navigate to="/PaginaConocenos" />} />
          <Route path="/PaginaConocenos" element={<PaginaConocenos />} />

          <Route path="/sectores" element={<Sectores />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/presupuesto" element={<Presupuesto />} /> 
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/paginasector" element={<PaginaSector />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/ventana" element={<Ventana />} />
          <Route path="/ventana1" element={<Ventana1 />} />
          <Route path="/ventana2" element={<Ventana2 />} /> 
        </Routes>
      </main>
      <div className='contenedor-footer-app'>
        {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      </div>
    </div>
  );
}

export default App;
