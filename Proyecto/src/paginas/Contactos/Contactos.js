import React, { useState } from "react";
import './contactos.css';
import ubicacion from '/workspaces/Proyecto-cibertec/Proyecto/src/assets/ubicacion-contactanos.png';

function ContactoS() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        numerotelf: '',
        dominio: '',
        nombre_empresa: '',
        ciudad: '',
        mensaje: ''
    });

    const [showResponse, setShowResponse] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResponse(true);
    };

    const handleReset = () => {
        setFormData({
            nombre: '',
            apellido: '',
            correo: '',
            numerotelf: '',
            dominio: '',
            nombre_empresa: '',
            ciudad: '',
            mensaje: ''
        });
        setShowResponse(false);
    };

    return (
        <section>
            <div className="container-content-contact">
                <h3>¿Necesitas adaptar tu empresa familiar al mundo digital y proteger tu legado?</h3>
                <p>
                    ¡Tenemos la solución!<br />
                    Ponte en contacto con nosotros para ayudarte a estructurar y ejecutar estrategias de marketing y crecimiento que adapten a tu empresa al mundo digital, protejan tu legado y te permitan crecer de manera sostenible. <br /><br />
                    Llena el formulario, escríbenos o agenda una cita con uno de nuestras estrategias de marketing y crecimiento.<br /><br />
                    Perú en Remoto <br />
                    Luis Aldair Solorsano Enriquez <br />
                    luis.solorsano@apexwebsolutions.com <br />
                    Cel: +51 987654321
                </p>
                <img className="imagen-contact" src={ubicacion} alt="Ubicación Contacto" />
            </div>
            <div className="container-form-contact">
                <div className="formulario-contact">
                    <p className="form-title-contact"><strong>Agenda una asesoría de 30 minutos</strong> con uno de nuestras estrategias</p>
                    <p>Conversemos sobre su estrategia de marketing y crecimiento <br /> no tiene ningún costo</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            className="inputText"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            className="inputText"
                            id="apellido"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="correo">Correo</label><br></br>
                        <input
                            type="email"
                            className="inputText"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        /><br></br>
                        <label htmlFor="numerotelf">Número de teléfono</label><br></br>
                        <input
                            type="text"
                            className="inputText"
                            id="numerotelf"
                            name="numerotelf"
                            value={formData.numerotelf}
                            onChange={handleChange}
                            required
                        /><br></br>
                        <label htmlFor="dominio">Escribe el dominio o página web de la empresa</label><br></br>
                        <input
                            type="text"
                            className="inputText"
                            id="dominio"
                            name="dominio"
                            value={formData.dominio}
                            onChange={handleChange}
                            required
                        /><b></b><br></br>
                        <label htmlFor="nombre_empresa">Nombre de la empresa</label><br></br>
                        <input
                            type="text"
                            className="inputText"
                            id="nombre_empresa"
                            name="nombre_empresa"
                            value={formData.nombre_empresa}
                            onChange={handleChange}
                            required
                        /><br></br>
                        <label htmlFor="ciudad">Ciudad</label><br></br>
                        <input
                            type="text"
                            className="inputText"
                            id="ciudad"
                            name="ciudad"
                            value={formData.ciudad}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea
                            id="mensaje"
                            className="inputText-contact"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            placeholder="Escribe aquí tu comentario"
                            required
                        /><br></br>
                        <button className="button-contact" type="submit">Enviar</button>
                    </form>
                    {showResponse && (
                        <div className="contenedor-respuesta">
                            <div className="subcontenedor-respuesta">
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: `
                                            Nombre: ${formData.nombre} ${formData.apellido} <br />
                                            Correo: ${formData.correo} <br />
                                            Número de teléfono: ${formData.numerotelf} <br />
                                            Dominio: ${formData.dominio} <br />
                                            Nombre de la empresa: ${formData.nombre_empresa} <br />
                                            Ciudad: ${formData.ciudad} <br />
                                            Mensaje: ${formData.mensaje}
                                        `
                                    }}
                                />
                                <div className="btn-respt-container">
                                    <button onClick={handleReset}>Cancelar</button>
                                    <button onClick={() => { handleReset(); alert('Formulario enviado'); }}>Aceptar</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ContactoS;
