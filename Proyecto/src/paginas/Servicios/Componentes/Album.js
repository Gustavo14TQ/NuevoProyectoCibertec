import React from 'react';
import './Componentes.css';

const Album = () => {
    const images = [
      { src: 'https://heartize.com/lab/wp-content/uploads/2020/10/el-diseno-de-tu-pagina-web-hecha-a-medida.jpg', alt: 'Imagen 1' },
      { src: 'https://davelia.com/images/davelia-agencia-marketing-estrategia-digital.webp', alt: 'Imagen 2' },
    ];
  
    return (
      <div className="album">
        {images.map((image, index) => (
          <img
            src={image.src}
            alt={image.alt}
            key={index}
            className={`image-${index + 1}`}
          />
        ))}
      </div>
    );
  };
  
  export default Album;
  
