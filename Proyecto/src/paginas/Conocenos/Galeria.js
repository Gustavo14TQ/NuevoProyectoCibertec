
import  Fragment  from "react";
import './Galeria.css';
import Tarjetas from './Tarjetas.js';



function Galeria(){

    const furnitureItems = [
        {
          image: '/imagen/mision.gif',
          hoverImage: 'imagen/Mision.jpg',
          title: 'Misión',
          description: ' «Ayudamos a millones de empresas a crecer mejor»',
        },
        {
          image: '/imagen/vision.gif',
          hoverImage: 'imagen/Vision.jpg',
          title: 'Visión',
          description: 'Nos inclinamos por el impacto a largo plazo.',
        },
        {
          image: '/imagen/valor.gif',
          hoverImage: 'imagen/Valores.jpg',
          title: 'Valores',
          description: 'Alentar a nuestros colaboradores de tomar decisiones basadas en estos valores'
        }
      ];


return (
<>
<div className="furniture-gallery">
      {furnitureItems.map((item, index) => (
        <Tarjetas
          key={index}
          image={item.image}
          hoverImage={item.hoverImage}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </>
 );

}

export default Galeria;