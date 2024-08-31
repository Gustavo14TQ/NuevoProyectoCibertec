
import '../estilos/PaginaConocenos.css';
import  Fragment  from 'react';
import Menu from './Menu.js';
import Banner from './Banner.js';
import Coleccion from './Coleccion.js';
import Galeria from './Galeria.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
<Menu />
<br></br>
<hr/>
<br></br>
<br></br>
<Banner />
<br></br>
<br></br>
<Coleccion />
<br></br>
<br></br>
<Galeria />
<br></br>
<br></br>
<hr></hr>
<Footer />


    </>
  );
}

export default App;