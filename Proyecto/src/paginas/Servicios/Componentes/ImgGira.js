import React from 'react';
import './Componentes.css';
const ImagenGiratoria = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="imagen-giratoria"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src="https://www.shutterstock.com/image-photo/update-software-application-hardware-upgrade-600nw-2295238383.jpg"
        alt="Descripción de la imagen"
        style={{
          transform: isHovering ? 'rotate(360deg)' : 'rotate(0deg)',
          transition: 'transform 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default ImagenGiratoria;

