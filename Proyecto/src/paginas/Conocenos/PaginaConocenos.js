import React from 'react';
import './PaginaConocenos';
import Banner from './Banner';
import Coleccion from './Coleccion'; // Esta ruta asume que `Coleccion.js` está en la misma carpeta.
import Galeria from './Galeria';

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
