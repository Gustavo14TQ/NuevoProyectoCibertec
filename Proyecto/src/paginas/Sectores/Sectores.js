  import React from 'react';
import './sectores.css';
import imagen1 from '../../assets/imagen-1.png';
import imagen2 from '../../assets/imagen-2.png';
import imagen3 from '../../assets/imagen-3.png';
import { Link } from 'react-router-dom';

function Sectores() {
  return (
    <div>
      <div className="titles-section">
        <p>CMS - Gestión de Contenido</p>
        <p>Mercado y Ventas</p>
        <p>Servicio al Cliente y Operaciones</p>
      </div>
      <div className="text-section">
        <p className="text-section-title">SECTORES en los que nos especializamos desde hace más de 8 años</p>
        <br />
        <br />
        <p>
          Como agencia de crecimiento y marketing estratégico, estamos comprometidos a ofrecer resultados tangibles que generan un impacto real. Nuestro equipo de profesionales experimentados trabaja en estrecha colaboración con los clientes para identificar sus objetivos y desafíos únicos y desarrollar estrategias personalizadas que aborden sus necesidades específicas.
        </p>
        <br />
        <p>
          Ya sea creando campañas de marketing específicas, optimizando cadenas de suministros o implementando tecnologías de vanguardia, tenemos la experiencia y los recursos para ayudar a las empresas a prosperar en el panorama competitivo actual.
        </p>
      </div>
      <div className="box-images">
        <div className="caja1 container-caja">
          <img src={imagen1} alt="Sector Comercial e Industrial" />
          <p>
            Sector Comercial e Industrial <br />
            B2B - B2C
          </p>
          <br />
          <p>- Material Electrónico</p>
          <p>- Materiales de Construcción</p>
          <p>- Energía</p>
          <p>- Oil & Gas</p>
          <p>- Comerciantes</p>
          <p>- Fabricantes</p>
          <Link to="/paginasector">Conoce más aquí</Link> {/* Usa Link en lugar de <a> */}
        </div>
        <div className="caja2 container-caja">
          <img src={imagen2} alt="Sector Agroindustrial" />
          <p>
            Sector Agroindustrial <br />
            B2B - B2C
          </p>
          <br />
          <p>- Café</p>
          <p>- Cacao y Chocolate</p>
          <p>- Palta</p>
          <p>- Entre Otros</p>
          <Link to="/paginasector">Conoce más aquí</Link> {/* Usa Link en lugar de <a> */}
        </div>
        <div className="caja3 container-caja">
          <img src={imagen3} alt="Servicio Profesional" />
          <p>
            Servicio Profesional <br />
            B2B - B2C
          </p>
          <br />
          <p>- Turismo</p>
          <p>- Clínicas o Entidades Prestadoras de Servicio de Salud</p>
          <p>- Logística y Comercio Exterior</p>
          <p>- Restaurantes</p>
          <p>- Transporte</p>
          <Link to="/paginasector">Conoce más aquí</Link> {/* Usa Link en lugar de <a> */}
        </div>
      </div>
    </div>
  );
}

export default Sectores;
