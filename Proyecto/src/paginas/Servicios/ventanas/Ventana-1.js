import { Fragment } from "react";
import Album from "../Componentes/Album";
import CambiaColor from "../Componentes/Titulo";
import './../ventanas/ventana-1.css'
function Ventana1(){
    return(
       <>
       <header className="header-ventana1">
        <h1 class="h1-ventana1">DISEÑO Y PROGRAMACIÓN DE PÁGINAS WEB</h1>
        <h3 >Nececitas una página web estructurada, bien diseñada,
        con un codigo impecable y emfocado en el crecimientro, aqui encontraras todo lo que necesitas
        </h3>
    </header>
    <div class="contenedor1-text-ventana1">
        <p class="contenedor1-parrafo-titulo">¿qué es una página web?</p><br/><br/>
        <p> Una página web es un conjunto de documentos electrónicos interconectados entre sí que se encuentran alojados en un servidor y son accesibles para los usuarios a través de internet. Estos documentos pueden contener información en forma de texto, imágenes, vídeos, enlaces y otros muchos elementos multimedia. Además, una página web puede ser estática, con contenido fijo, o dinámica, con contenido actualizable que además puede adaptarse a las interacciones de sus visitantes. El objetivo principal de una página web puede variar dependiendo de su propósito.</p>
    </div>
    <div class="carrusel">
        <p>Una pagina web es mucho mas que un catálogo,es una herramienta de marketing,ventas y servicio al cliente extremadamente poderosa disponible <br/>
        </p>
        <Album></Album>
    </div>
    <div class="contenedor-2-text-ventana1">
        <p>¿para qué sirve una página web?</p><br/><br/>
        <p>Un sitio web es el lugar ideal para proyectar diversos pensamientos, ideas, deseos, creencias y promover la venta de productos, contratación de servicios, creación de marca digital, entre otros aspectos importantes. Usando solo un ordenador puedes crear páginas web que convierten y de esa manera atraer una gran cantidad de usuarios y clientes.
        </p>
    
    </div>
    <div class="div-3">
        <CambiaColor></CambiaColor>
    </div>
       </>
    )
}
export default Ventana1