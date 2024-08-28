import React, { useState, useEffect } from 'react';

const CambiaColor = () => {
  const [color, setColor] = useState('rojo');

  useEffect(() => {
    const intervalo = setInterval(() => {
      switch (color) {
        case 'rojo':
          setColor('amarillo');
          break;
        case 'amarillo':
          setColor('verdeAgua');
          break;
        case 'verdeAgua':
          setColor('rojo');
          break;
        default:
          setColor('rojo');
      }
    }, 1000);
    return () => clearInterval(intervalo);
  }, [color]);

  return (
    <h2
      style={{
        color:
          color === 'rojo'
            ? 'red'
            : color === 'amarillo'
            ? 'yellow'
            : 'cyan',
      }}
    >
     Una página web bien diseñada y funcional puede aumentar la visibilidad del negocio, mejorar su credibilidad y aumentar las ventas
    </h2>
  );
};

export default CambiaColor;
