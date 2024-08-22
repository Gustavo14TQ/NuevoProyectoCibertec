
import React, { Fragment } from "react";
import './servicios.css';
function Servicios() {
  return (
    <>
      <div className="cuerpo">
        <nav className="nav-1">
          <img id="img-1" src="https://www.hubspot.com/hubfs/media/sitioweb-1.jpeg" />
        </nav>
        <nav className="nav-2">
          <ol>
            <li><a href="indexventana1.html">CAMPAÑA DE POSICIONAMIENTO WEB (SEO)</a></li>
            <li><a href="indexventana2.html">DISEÑO Y PROGRAMACIÓN WEB A MEDIDA</a></li>
            <li><a href="indexventana3.html">MANTENIMIENTO Y ACTUALIZACIÓN DE PÁGINAS WEB</a></li>

          </ol>

        </nav>
      </div>
    </>
  )
}

export default Servicios;