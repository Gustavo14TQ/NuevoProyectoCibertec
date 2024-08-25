import React from "react";
import './contactos.css';
function Contacto() {
    return (
      <section>
        <div className="container-content-blog">
          <h3>¿Necesitas adaptar tu empresa familiar al mundo digital y proteger tu legado?</h3>
          <br />
          <p>
            ¡Tenemos la solución!<br />
            Ponte en contacto con nosotros para ayudarte a estructurar y ejecutar estrategias de marketing y crecimiento que adapten a tu empresa al mundo digital, protejan tu legado y te permitan crecer de manera sostenible. <br /><br />
            Llena el formulario, escríbenos o agenda una cita con uno de nuestras estrategias de marketing y crecimiento.<br /><br />
            Perú en Remoto <br />
            Luis Aldair Solorsano Enriquez <br />
            luis.solorsano@apexwebsolutions.com <br />
            Cel: +51 987654321
          </p>
          <img className="imagen-contact-blog" src="imagen-contact/ubicacion-contactanos.png" alt="Ubicación Contacto" />
        </div>
        {/* La parte de las secciones Formulario */}
        <div className="container-form">
          <div className="formulario">
            <p className="form-title"><strong>Agenda una asesoría de 30 minutos</strong> con uno de nuestras estrategias</p>
            <p>
              Conversemos sobre su estrategia de marketing y crecimiento <br /> no tiene ningún costo
            </p>
            <form id="miFormulario">
              <br />
              {/* Nombre */}
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="inputText" id="nombre" name="nombre" required />
              {/* Apellido */}
              <label htmlFor="apellido">Apellido</label>
              <input type="text" className="inputText" id="apellido" name="apellido" required />
              {/* Correo */}
              <br /><br />
              <label htmlFor="correo">Correo</label>
              <br />
              <input type="email" className="inputText" id="correo" name="correo" required />
              {/* Número de teléfono */}
              <br /><br />
              <label htmlFor="numerotelf">Número de teléfono</label>
              <br />
              <input type="text" className="inputText" id="numerotelf" name="numerotelf" required />
              {/* Texto del dominio */}
              <br /><br />
              <label htmlFor="dominio">Escribe el dominio o página web de la empresa</label>
              <br />
              <input type="text" className="inputText" id="dominio" name="dominio" required />
              {/* Nombre de la empresa */}
              <br /><br />
              <label htmlFor="nombre_empresa">Nombre de la empresa</label>
              <br />
              <input type="text" className="inputText" id="nombre_empresa" name="nombre_empresa" required />
              {/* Nombre de la ciudad */}
              <br /><br />
              <label htmlFor="ciudad">Ciudad</label>
              <br />
              <input type="text" className="inputText" id="ciudad" name="ciudad" required />
              {/* Mensaje */}
              <br /><br />
              <label htmlFor="mensaje">Mensaje</label>
              <br />
              <textarea id="mensaje" className="inputText" name="mensaje" placeholder="Escribe aquí tu comentario" required></textarea>
              <br />
              <button id="btn-enviar" type="submit">Enviar</button>
              <br />
            </form>
          </div>
        </div>
      </section>
    );
  }

export default Contacto;