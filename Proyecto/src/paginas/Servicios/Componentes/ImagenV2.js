import React from 'react';
import './Componentes.css';
const ImagenVentana2 = ({ src, alt }) => {
  return (
    <div className="imagen-ventana2">
      <img className='img-1' src={'https://pulsodigital.com.mx/wp-content/uploads/Mantenimiento-de-paginas-web-img-2.jpg'} alt={alt} />
    </div>
  );
};

export default ImagenVentana2;
