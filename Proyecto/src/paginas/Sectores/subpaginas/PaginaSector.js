import React from "react";
import { Link } from 'react-router-dom';
import './paginasector.css'; // Asegúrate de que el archivo CSS esté en la ubicación correcta

function PaginaSector() {
  return (
    <div>
      <div className="regresar">
        <Link to="/sectores">
          <i className="fa-solid fa-arrow-right-from-bracket fa-rotate-180" style={{ color: "#1b9da9" }}></i>
          <b>Regresar</b>
        </Link>
      </div>
      <h1 className="h1-PaginaSector">Experiencia Comprobada en el Sector Agroindustrial</h1>
      <p className="sector-agro">B2B - I</p>
      <section>
        <div className="imagenes">
          <img src="https://jappi.com.co/wp-content/uploads/2022/09/Jappi-1.jpg" alt="Imagen de Agroindustria 1" />
          <img src="https://www.europartnersgroup.com/wp-content/uploads/2021/06/Portada_aguacates_esp.png" alt="Imagen de Agroindustria 2" />
        </div>
        <div className="container-texts">
          <div className="caja-1 box">
            <h3>Café 🧉</h3>
            <p>Desde cableado hasta accesorios de iluminación y componentes electrónicos, ayudamos a las empresas de la industria de materiales eléctricos a llegar a su público objetivo y lograr un crecimiento sostenible.</p>
          </div>
          <div className="caja-2 box"> 
            <h3>Cacao & Chocolate 🍫</h3>
            <p>Entendemos las complejidades de la industria del petróleo y el gas y tenemos la experiencia para desarrollar estrategias de marketing específicas que ayuden a las empresas de este sector a conectarse con su mercado objetivo, mejorar la visibilidad de la marca e impulsar el crecimiento personal.</p>
          </div>
          <div className="caja-3 box">
            <h3>Sacha Inchi</h3>
            <p>Ya sean materiales para techos o bases estructurales de acero, ofrecemos estrategias de marketing personalizadas para ayudar a las empresas de materiales de construcción a promocionar eficazmente sus productos y aumentar su participación en el mercado.</p>
          </div>
          <div className="caja-4 box">
            <h3>Palta 🥑</h3>
            <p>Desde fuentes de energía renovables hasta proveedores de energía tradicionales, nos especializamos en crear campañas de marketing personalizadas que muestran los beneficios de diferentes soluciones energéticas y ayudan a las empresas a atraer nuevos clientes y ampliar su alcance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaginaSector;
