import { Fragment } from "react";
import ImagenVentana2 from "../Componentes/ImagenV2";

import './css/ventana-2.css'
import ImagenIluminada from "../Componentes/ImgV2ilu";
import ImagenGiratoria from "../Componentes/ImgGira";
function Ventana2(){
    return(
        <>
        <header className="head">
        <div className="div-12">
            <p className="p12">
                <b>EXPERTOS EN MEJORAR PÁGINAS WEB</b><br/> <br/>Ya sabes que tu sitio web es la columna vertebral de tu presencia digital. Y como tal, el mantenimiento web ayuda a reflejar el valor de tu marca. En concreto, estas son las ventajas de invertir en este proceso
            </p>
            
           
            
        </div>
    </header>
    <div class="div-22">
        <nav className="NAV12">
            <ImagenVentana2></ImagenVentana2>
            <ul className="ul12">SERVICIO DE MANTENIMIENTO WEB
                <li>ACTUALIZACIONES</li>
                <li>ELIMINACION DE PAGINAS ERROR</li>
                <li>OPTIMIZACIÓN SEO</li>
                <li>COPIAS DE SEGURIDAD</li>
                <li>MONITORIZACIÓN</li>
            </ul>
        </nav>
        <nav className="NAV12">
            <ImagenIluminada></ImagenIluminada>
            <ul className="ul12">TIPOS DE MANTENIMIENTO
                <li>MANTENIMIENTO PREVENTIVO</li>
                <li>MANTENIMIENTO CORRECTIVO</li>
                <li>MANTENIMIENTO EVOLUTIVO</li>
                <li>MANTENIMIENTOPERFECTIVO</li>
                
            </ul>
        </nav>
        <nav className="NAV12">
            <ImagenGiratoria></ImagenGiratoria>
            <ul className="ul12">SOPORTE WEB
                <li>OPTIMIZACIÓN DE RENDIMIENTO</li>
                <li>ANÁLISIS Y SEGIMIENTO</li>
                <li>SEGURIDAD Y BACKUPS</li>
                <li>ASESORAMIENTO Y CONSULTAS</li>
                <li>FORMACION Y CAPACITACIÓN</li>
            </ul>
        </nav>
    </div>
        </>
    )
}
export default Ventana2