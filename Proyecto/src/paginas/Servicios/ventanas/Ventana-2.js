import { Fragment } from "react";
import Carrusel from '3'
import './Ventana-2.css';
function Ventana2() {
    return(
    <>
       <header>
        <div class="div-1">
            <p>
                <b>EXPERTOS EN MEJORAR PÁGINAS WEB</b><br/> <br/>Ya sabes que tu sitio web es la columna vertebral de tu presencia digital. Y como tal, el mantenimiento web ayuda a reflejar el valor de tu marca. En concreto, estas son las ventajas de invertir en este proceso
            </p>
            <h3> "Con nosotros,<br/> tu sitio web estará siempre <br/>actualizado y seguro."</h3>
            <button><a href="../APEXWEB_SOLUTION/Presupuesto.html">INGRESA TU PRESUPUESTO</a></button><button><a href="../Contactanos/Contactanos.html">CONTACTANOS</a></button>
            
        </div>
    </header>
    <div class="div-2">
        <nav>
            <Carrusel/>
            <ul>SERVICIO DE MANTENIMIENTO WEB
                <li>ACTUALIZACIONES</li>
                <li>ELIMINACION DE PAGINAS ERROR</li>
                <li>OPTIMIZACIÓN SEO</li>
                <li>COPIAS DE SEGURIDAD</li>
                <li>MONITORIZACIÓN</li>
            </ul>
        </nav>
        <nav>
            <img class="img-1" src="image/ventana3-4.webp"/>
            <ul>TIPOS DE MANTENIMIENTO
                <li>MANTENIMIENTO PREVENTIVO</li>
                <li>MANTENIMIENTO CORRECTIVO</li>
                <li>MANTENIMIENTO EVOLUTIVO</li>
                <li>MANTENIMIENTOPERFECTIVO</li>
                
            </ul>
        </nav>
        <nav>
            <img class="img-1" src="image/ventana3-3.webp"/>
            <ul>SOPORTE WEB
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