// src/paginas/Blog/Blog.js
import React from 'react';
import './blog.css';
function Blog() {
  return (
    <div>
       <section>
            <div className="images-blog">
                <div className="image-1-blog image-blog">            
                    <img src="https://cdn-icons-png.flaticon.com/512/4529/4529980.png" alt="IA y SEO" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrAz-umrjYxxZdgNegTfPe1_Ql9j6xwsIgQ&s" alt="Imagen 2" />
                    <p>Contenido generado por IA y SEO, Ventajas, desafíos y estrategias</p>
                </div>
                <div className="image-2-blog image-blog">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnD5GjZ6S7voUxRcP7Jz5Gy9wikGTVCGdKA&s" alt="AI SEO" />
                    <img src="https://img.freepik.com/vector-gratis/ilustracion-simbolo-vector-inteligencia-artificial-aislado-fondo-blanco_8130-2311.jpg" alt="AI SEO" /> 
                    <p>AI SEO: Descubre el poder de la Inteligencia Artificial en la optimización SEO</p>
                </div>
                <div className="image-3-blog image-blog">
                    <i className="fa-solid fa-code"></i>
                    <i className="fa-brands fa-wordpress" style={{ color: '#005799' }}></i>
                    <p>Experto de páginas WordPress <br />¿Cómo elegir al mejor para mi proyecto de internet?</p>
                </div>
                <div className="image-4-blog image-blog">
                    <img src="https://previews.123rf.com/images/rastudio/rastudio1708/rastudio170810503/84947096-internet-icono-de-la-l%C3%ADnea-vector-aislado-aislado-en-el-fondo-blanco-icono-de-la-l%C3%ADnea-internet.jpg" alt="Diseño Web" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WNig0AMgLpCEtSH4FETcMJafRdGe8RjfnA&s" alt="Diseño Web" />
                    <p>Entra al mundo del Diseño Web y descubre tu futura página</p>
                </div>
            </div>

            <div className="formulario-blog">
                <p className="title-p-blog">¿Te gusta nuestro Blog?</p>
                <div className="sub-form-blog">
                    <p>
                        Recibe nuestros artículos de ayuda para tu página web y campañas de marketing digital
                    </p>
                    <form>
                        <input type="text" placeholder="Nombre" required />
                        <input type="email" placeholder="¡Dinos tu mejor gmail!" required />
                        <div className="newsletter-blog">
                        <input 
                            type="checkbox" 
                            style={{ width: '20px', height: '20px', margin: '0', padding: '0', border: '2px solid #ccc', backgroundColor: '#fff' }} required />
                            <p>Deseo recibir la Newsletter y acepto su <u>política y privacidad</u></p><br></br><br></br>
                            <br></br>
                            <button>Enviar</button>
                        </div>

                    </form>
                    <p className="books-blog">¡Nuestros Ebooks gratis!</p>
                    <p className="qwe-blog">Stop¡ 40 preguntas antes de contratar un diseño web</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNSvEdcynqk7kCDmBx7iQXhRefRfKpJqepA&s" alt="Ebook" />
                </div>
            </div>
        </section>
    </div>
  );
}

export default Blog;
