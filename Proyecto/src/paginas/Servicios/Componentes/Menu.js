import { Fragment } from "react";
import { Link,Outlet  } from 'react-router-dom';
function Menu(){
    return (
        <>
         <ol>
            <li> 
                <Link to='/ventana'>CAMPAÑA DE POSICIONAMIENTO WEB </Link> 
            </li>
            <li> 
                <Link to='/ventana1'>DISEÑO Y PROGRAMACIÓN WEB A MEDIDA </Link> 
            </li>
            <li> 
                <Link to='/ventana2'>MANTENIMIENTO Y ACTUALIZACIÓN DE PÁGINAS WEB </Link> 
            </li>
         </ol>
         <Outlet></Outlet>
         
        </>
    )
}
export default Menu;