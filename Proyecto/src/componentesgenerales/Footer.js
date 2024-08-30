import React from 'react';
import './footer.css'
import logo from '../assets/logo.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer (){
    return (
    <>
        <footer className="footer-1">
            <div className="footer-item">
              <img id="logito" src={logo} alt="Imagen 1"/>
            </div>
            <div className="footer-item">
            <i class="fa-solid fa-phone" style={{color: '#00d1ae;'}}></i>
              <p>1223546475757 </p>
            </div>
            <div className="footer-item">
            <i class="fa-solid fa-location-dot" styles={{color: '#74bff6'}}></i>
              <p>Calle: Prolongación Islas Vírgenes, 
              La Molina 15026</p>
            </div>
            <div className="footer-item">
            <i class="fa-brands fa-square-whatsapp fa-lg" style={{color: '#33db4f'}}></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-brands fa-youtube fa-lg" style={{color: '#ff0000'}}></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-brands fa-facebook fa-lg" style={{color: '#0065b3'}}></i>
            </div>
        </footer>
    </>    
)}

export default Footer;