import React from 'react';
import './Componentes.css';
const ImagenIluminada = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="imagen-iluminada"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
      className='img-1'
        src="https://pulsodigital.com.mx/wp-content/uploads/Mantenimiento-de-paginas-web-img-1.jpg"
        alt="Descripción de la imagen"
        style={{
          filter: isHovering ? 'brightness(140%)' : 'brightness(100%)',
          transition: 'filter 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default ImagenIluminada;