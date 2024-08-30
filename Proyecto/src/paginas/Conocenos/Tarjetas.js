import { useState } from "react";
import  Fragment  from "react";
import './Tarjetas.css'

function Tarjetas ({ image, hoverImage, title, description }){

        const [currentImage, setCurrentImage] = useState(image); 

  return (
  <>

  <div
      className="furniture-card"
      onMouseEnter={() => setCurrentImage(hoverImage)}
      onMouseLeave={() => setCurrentImage(image)}
    >
      <img src={currentImage} alt={title} className="furniture-image" />
      <div className="furniture-info">
        <h2 className="furniture-title">{title}</h2>
        <p className="furniture-description">{description}</p>
      </div>
    </div>
  
  </>

  );

}

export default Tarjetas;
