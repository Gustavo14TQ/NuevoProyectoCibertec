// src/components/HeaderBanner.js
import React, { useState, useEffect } from 'react';
import './Banner.css'


const Banner = () => {
  // Arreglo con las imágenes del carrusel
  const images = [
    '/imagen/banner1.jpg',
    '/imagen/banner2.jpg',
    '/imagen/banner7.jpg',
    '/imagen/banner8.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="header-banner">
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Banner ${index + 1}`} className="banner-image" />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Banner;