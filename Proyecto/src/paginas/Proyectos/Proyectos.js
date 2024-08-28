import React, { useState } from "react";
import './proyectos.css';
import imagen1 from '../../../src/assets/imagen1sector.png';
import imagen2 from '../../../src/assets/imagen2sector.png';
import imagen3 from '../../../src/assets/imagen3sector.png';
import imagen4 from '../../../src/assets/imagen4sector.png';

function Proyectos() {
    // Estado para manejar la visibilidad de las imágenes
    const [visible, setVisible] = useState({
        img1: true,
        img2: false,
        img3: true,
        img4: false
    });

    return (
        <div>
            <div className="container-pantalla">
                <div className="content-img">
                    <img 
                        className="img1" 
                        src={imagen1} 
                        alt="Desarrollo Web 1"
                        style={{ opacity: visible.img1 ? 1 : 0 }} 
                        onMouseOver={() => {
                            setVisible({ ...visible, img1: false, img2: true });
                        }}
                        onMouseOut={() => {
                            setVisible({ ...visible, img1: true, img2: false });
                        }}
                    />
                    <img 
                        className="img2" 
                        src={imagen2} 
                        alt="Desarrollo Web 2"
                        style={{ opacity: visible.img2 ? 1 : 0 }} 
                        onMouseOver={() => {
                            setVisible({ ...visible, img1: false, img2: true });
                        }}
                        onMouseOut={() => {
                            setVisible({ ...visible, img1: true, img2: false });
                        }}
                    />
                </div>
                <div className="content-text">
                    <p className="titulo">
                        Diseño de paginas web en WordPress, de diseño responsive - adaptable a entornos web
                        y tablets - y optimizada al procesamiento web SEO.
                    </p>
                    <p className="descripcion">
                    El diseño de páginas web en WordPress se ha convertido en una opción popular 
                    debido a su flexibilidad y facilidad de uso. Un aspecto esencial en este tipo de diseño es la adaptabilidad 
                    o diseño responsive, que permite que las páginas web se ajusten automáticamente a diferentes tamaños de
                    pantalla, ya sea en entornos de escritorio, tabletas o móviles. Esto no solo mejora la experiencia del 
                    usuario al navegar en el sitio, sino que también garantiza 
                    que la página se vea profesional y funcione correctamente en cualquier dispositivo.
                    </p>
                </div>
            </div>
            <div className="container-pantalla">
                <div className="content-text">
                    <p className="descripcion">
                        Además de ser responsive, es crucial que las páginas web en WordPress estén 
                        optimizadas para el SEO (Search Engine Optimization). Esto implica la utilización de técnicas y 
                        herramientas que mejoren la visibilidad de la página en los motores de búsqueda, facilitando 
                        que los usuarios encuentren el sitio al realizar búsquedas relevantes. La optimización SEO 
                        incluye la correcta estructuración de contenido, el uso de palabras clave, la mejora de la 
                        velocidad de carga de la página y la implementación de enlaces internos y externos de calidad, 
                        lo cual incrementa las posibilidades de atraer tráfico orgánico y mejorar el posicionamiento 
                        en los resultados de búsqueda.
                    </p>
                </div>
                <div className="content-img">
                    <img 
                        className="img3" 
                        src={imagen3} 
                        alt="Imagen 3"
                        style={{ opacity: visible.img3 ? 1 : 0 }} 
                        onMouseOver={() => {
                            setVisible({ ...visible, img3: false, img4: true });
                        }}
                        onMouseOut={() => {
                            setVisible({ ...visible, img3: true, img4: false });
                        }}
                    />
                    <img 
                        className="img4" 
                        src={imagen4} 
                        alt="Imagen 4"
                        style={{ opacity: visible.img4 ? 1 : 0 }} 
                        onMouseOver={() => {
                            setVisible({ ...visible, img3: false, img4: true });
                        }}
                        onMouseOut={() => {
                            setVisible({ ...visible, img3: true, img4: false });
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Proyectos;
