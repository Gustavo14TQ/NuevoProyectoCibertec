import { Fragment, useState } from "react";

import { Button, Form } from "react-bootstrap";
import './Presupuesto.css';


function Presupuesto() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [numero, setNumero] = useState(""); 
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");

  const regexTexto = /^[a-zA-ZÁÉÍÓÚáéíóúñ\s]+$/;
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexNumero = /^[0-9]{1,9}$/;

  const realizarEnvio = (e) => {
    e.preventDefault();

    let errorMessages = [];

    if (
      nombres === "" ||
      apellidos === "" ||
      descripcion === "" ||
      numero === "" ||
      correo === "" ||
      celular === ""
    ) {
      errorMessages.push("Debe rellenar todos los campos...");
    }

    if (!regexTexto.test(nombres)) {
      errorMessages.push(
        "Nombre no válido. Solo se permiten letras y espacios."
      );
    }

    if (!regexTexto.test(apellidos)) {
      errorMessages.push(
        "Apellido no válido. Solo se permiten letras y espacios."
      );
    }

    if (!regexTexto.test(descripcion)) {
      errorMessages.push(
        "Descripción no válida. Solo se permiten letras y espacios."
      );
    }

    if (!regexNumero.test(numero)) {
      errorMessages.push(
        "Número de hojas no válido. Debe ser un número entre 1 y 9 dígitos."
      );
    }

    if (!regexNumero.test(celular)) {
      errorMessages.push(
        "Número de celular no válido. Debe ser un número entre 1 y 9 dígitos."
      );
    }

    if (!regexCorreo.test(correo)) {
      errorMessages.push("Correo electrónico no válido.");
    }

    if (errorMessages.length > 0) {
      alert("Errores:\n" + errorMessages.join("\n"));
    } else {
      alert(
        `Estimad@  : ${nombres} ${apellidos},Lo solicitado "${descripcion}" está en proceso, el número de páginas a considerar en su presupuesto es de: ${numero} páginas ,le enviaremos el presupuesto a este correo,  ${correo} y un asesor se contactará con uste al siguiente número ${celular}. Gracias por contactar a APEXWEB-SOLUTIONS.`
      );
    }
  };

  const cambioNombres = (e) => setNombres(e.target.value);
  const cambioApellidos = (e) => setApellidos(e.target.value);
  const cambioDescripcion = (e) => setDescripcion(e.target.value);
  const cambioNumero = (e) => setNumero(e.target.value);
  const cambioCorreo = (e) => setCorreo(e.target.value);
  const cambioCelular = (e) => setCelular(e.target.value);

  return (
    <>
    <div className="centered-form">
      <Form onSubmit={realizarEnvio}>
      <div><h1>Formulario Presupuesto</h1></div>
        <Form.Group>
          <Form.Control
            type="text"
            value={nombres}
            onChange={cambioNombres}
            placeholder="Ingresa tu nombre"
          />
          <div className="mili"><br></br></div>
          
          <Form.Control
            type="text"
            value={apellidos}
            onChange={cambioApellidos}
            placeholder="Ingresa tu apellido"
          />
          <div className="mili"><br></br></div>
          <Form.Control
            type="text"
            value={descripcion}
            onChange={cambioDescripcion}
            placeholder="Descripción del proyecto"
          />
          <div className="mili"><br></br></div>
          <Form.Control
            type="text"
            value={numero}
            onChange={cambioNumero}
            placeholder="Número de hojas"
          />
         <div className="mili"><br></br></div>
          <Form.Control
            type="text"
            value={correo}
            onChange={cambioCorreo}
            placeholder="Ingresa tu correo"
          />
          <div className="mili"><br></br></div>
          <Form.Control
            type="text"
            value={celular}
            onChange={cambioCelular}
            placeholder="Ingresa tu celular"
          />
          <div className="mili"><br></br></div>
        </Form.Group>
        <Button type="submit">Enviar datos</Button>
      </Form>
      </div>
    </>
  );
}

export default Presupuesto;



