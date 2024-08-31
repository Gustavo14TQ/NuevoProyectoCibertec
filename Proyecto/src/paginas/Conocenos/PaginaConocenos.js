import React from 'react';
import './PaginaConocenos.css'
import Banner from './Banner.js';
import Coleccion from './Coleccion.js'; // Esta ruta asume que `Coleccion.js` está en la misma carpeta.
import Galeria from './Galeria.js';

function PaginaConocenos() {
  return (
    <>
      <br />
      <hr />
      <br />
      <br />
      <Banner />
      <br />
      <br />
      <Coleccion />
      <br />
      <br />
      <Galeria />
      <br />
      <br />
      <hr />
 
    </>
  );
}

export default PaginaConocenos;
