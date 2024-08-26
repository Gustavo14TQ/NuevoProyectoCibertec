import { Fragment } from "react";
import { Link, useLocation } from 'react-router-dom';
function Menu(){
    return (
        <>
         <ol>
            <li> 
                <Link to='/ventana'>CAMPAÑA DE POSICIONAMIENTO WEB </Link> 
            </li>
            <li> 
                <Link to='/ventana'>DISEÑO Y PROGRAMACIÓN WEB A MEDIDA </Link> 
            </li>
            <li> 
                <Link to='/ventana'>MANTENIMIENTO Y ACTUALIZACIÓN DE PÁGINAS WEB </Link> 
            </li>
         </ol>
        </>
    )
}
export default Menu;