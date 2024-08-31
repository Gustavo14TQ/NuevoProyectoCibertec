import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ventana.css';
import ImagenGiratoria  from "../Componentes/Carru3d";
function Ventana() {
    return (
        <>
        <div className="contenedor-principal-ventana">
            <header className="header-ventana">
        <h1 className="h1">SERVIVIO DE POSICIONAMIENTO SEO</h1>
        <p className="p-11">Estudiamos y analizamos las palabras claves de tu negocio.Creamos la estrategia,te ayudamos a escribir los contenidos, optimizamos
            la pagína web y buscamos referidosque generan lincks de autoridad para que tu página web salga en los primeros resultadosde los motores de búsqueda y redes sociales
        </p>
    </header>
    <div class="container-text-ventana">
        <p className="texto-ventana">No basta con tener una página web bonita y rápida, debemos generar trafico de calidad que nos ayude a obtener prospectos calificados que puedan convertirse en clientes.</p>
        <p id="parrafotitulo"class="parrafo-titulo-ventana" styles={{
               color: "#6ccdd0",
               padding: "40px"
        }}>¿Qué es posicionamiento orgánico SEO?    </p>
        <p class="texto-ventana">Posicionamiento orgánico SEO es el proceso de optimizar los activos digitales o páginas web de una empresa, marca o persona para qua los buscadores, motores de bůsqueday redes sociales los encuentron y los ublquen on los primeros resultados, Generando trafico de calidad que se convlerta on contactos calificados de ventas que podamos nutrir y contactar para aumentar los ingresos de la compania. Aplicarlo de manera correcta requlere de la Implementacion de técnicas o tacticas de posicionamiento orgánico SEO internas o técnicas y externas.
            2En qué consiste y qué incluye el servicio de posicionamiento orgánico SEO? Nuestra oferta de Posicionamiento Orgánico SEO es la Ilave que desbloquea el potoncial ocultoi de tu presencia on linoa. To brindamos un apoyo constanto y especializado para porfeccionar y optimizar la estrategia SEO de tu stio wob. Nosotros, no solo te ayudamos a escalar las posiciones on los motores de búsqueda, sino que también te acompañamos an cada paso dol camino hacia el xito en linea.
            Incluye el análisis del desompefio de las palabras claves utilizando herramientas tecnológicas como SemRush, Googlo Koyword Planner, entro otras, la estructuración de la estrategia, la optimización interna o técnica de la página wob, el apoyo on la redacción de contenidos y la búsqueda de roferidos que genoren links do autoridad (SEO Externo)atu página web.</p>
            <p><button class="btn btn-primary" type="submit">Contáctanos</button></p>

    </div>
    
    <div class="contenedor2">
     <ImagenGiratoria/>
    </div>
                
    </div>
        </>
    )
}
export default Ventana;