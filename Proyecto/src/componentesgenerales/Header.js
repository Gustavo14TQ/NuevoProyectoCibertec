// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Ajusta la ruta si es necesario

import './header.css'; // Asegúrate de que el nombre y la ruta sean correctos

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <img id="imagen" src={logo} className="logo-header" alt="Logo" />
      <nav className="navegacion">
        <Link 
          className={`menu ${location.pathname === '/conocenos' ? 'active' : ''}`} 
          to="/conocenos"
        >
          Conócenos
        </Link>
        <Link 
          className={`menu ${location.pathname === '/sectores' ? 'active' : ''}`} 
          to="/sectores"
        >
          Sectores
        </Link>
        <Link 
          className={`menu ${location.pathname === '/servicios' ? 'active' : ''}`} 
          to="/servicios"
        >
          Servicios
        </Link>
        <Link 
          className={`menu ${location.pathname === '/proyectos' ? 'active' : ''}`} 
          to="/proyectos"
        >
          Proyectos
        </Link>
        <Link 
          className={`menu ${location.pathname === '/blog' ? 'active' : ''}`} 
          to="/blog"
        >
          Blog
        </Link>
        <Link 
          className={`menu ${location.pathname === '/presupuesto' ? 'active' : ''}`} 
          to="/presupuesto"
        >
          Presupuesto
        </Link>
        <Link 
          className={`menu ${location.pathname === '/contactos' ? 'active' : ''}`} 
          to="/contactos"
        >
          Contáctanos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
