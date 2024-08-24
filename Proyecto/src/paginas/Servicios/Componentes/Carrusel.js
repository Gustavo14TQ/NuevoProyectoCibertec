import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.aulacreactiva.com/wp-content/uploads/2020/09/IMG-1-diseno-web.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hubspot.com/hubfs/media/sitioweb-1.jpeg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gendigital.pe/wp-content/uploads/2020/06/Dise%C3%B1o-de-P%C3%A1ginas-Web-Las-nuevas-tecnolog%C3%ADas-para-tu-web-1080x675.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;