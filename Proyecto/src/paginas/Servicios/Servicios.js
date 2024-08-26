
import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './servicios.css';
import Carrusel from "./Componentes/Carrusel"
import Menu from "./Componentes/Menu";
function Servicios() {
  return (
    <>
      <div className="cuerpo">
        <nav className="nav-1">
         <Carrusel/>
        </nav>
        <nav className="nav-2">
          <Menu></Menu>

        </nav>
      </div>
    </>
  )
}

export default Servicios;