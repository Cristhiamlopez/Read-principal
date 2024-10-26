import React from 'react';
import Carousel from './Carousel';
import './Home.css';
import image1 from './assets/Carrousel/hamburguesa.png';
import image2 from './assets/Carrousel/carne.png';
import image3 from './assets/Carrousel/salchipapa.png';
import image4 from './assets/Aliados/bimbo.png';
import image5 from './assets/Aliados/carne.png';
import image6 from './assets/Aliados/comapan.png';
import image8 from './assets/Aliados/ranchera.png';
import image9 from './assets/Aliados/zenu.png';
import restaurante1 from './assets/sedes/restaurante.png';
import restaurante2 from './assets/sedes/restaurante2.png';

// Carousel Component
function HomeCarousel() {
  const images = [image1, image2, image3];

  return (
    <div className="home">
      <Carousel images={images} />
      {/* Contenedor de imágenes adicionales */}
      <div className="image-container">
        <img src={image4} alt="Imagen 4" />
        <img src={image5} alt="Imagen 5" />
        <img src={image6} alt="Imagen 6" />
        <img src={image8} alt="Imagen 8" />
        <img src={image9} alt="Imagen 9" />
      </div>
    </div>
  );
}

// Nuestras sucursales Component
function HomeBranches() {
  return (
    <div className="container-fluid">
      <h1 className="branch-title">NUESTRAS SUCURSALES</h1>
      <div className="branches-container">
        <div className="branch">
          <h2 className="branch-name">FONTIBON</h2>
          <h3 className="branch-address">Carrera 118b 23 b 75</h3>
          <p className="branch-description">
            Disfruta la mejor comida a la parrilla de todo el sector de Fontibón.
          </p>
          <h2 className="branch-contact">
            Contacto 3118657963 solicita tu domicilio
          </h2>
          <img src={restaurante1}alt="Restaurante Fontibón" className='branch-img' />
        </div>
        <div className="branch">
          <h2 className="branch-name">ENGATIVA</h2>
          <h3 className="branch-address">Calle 72a 112a 15</h3>
          <p className="branch-description">
            Disfruta la mejor comida a la parrilla de todo el sector de Engativá.
          </p>
          <h2 className="branch-contact">
            Contacto 3005723381 solicita tu domicilio
          </h2>
          <img src={restaurante2}alt="Restaurante Engativá" className='branch-img' />
        </div>
      </div>
    </div>
  );
}



// Componente principal Home que renderiza ambos componentes

function Home() {
  return (
    <div>
      <HomeCarousel />
      <HomeBranches />
    </div>
  );
}

export default Home;

