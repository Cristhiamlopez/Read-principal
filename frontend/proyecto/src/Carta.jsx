import React from 'react';
import './Carta.css'; // Archivo CSS para los estilos

// Importar imágenes de entradas
import imagen10 from './assets/Carta/Entradas/aroscebolla.jpg';
import imagen11 from './assets/Carta/Entradas/papaschorizo.jpg'; 
import imagen12 from './assets/Carta/Entradas/Empanadas.jpg';
import imagen13 from './assets/Carta/Entradas/sopa.jpg';
import imagen14 from './assets/Carta/Entradas/ensalada.jpg';
import imagen15 from './assets/Carta/Entradas/papasqueso.jpg';

// Importar imágenes para platos fuertes
import imagen16 from './assets/Carta/Platosfuertes/hamburguesa.jpg';
import imagen17 from './assets/Carta/Platosfuertes/doblecarne.jpg'; 
import imagen18 from './assets/Carta/Platosfuertes/triplecarne.jpg';
import imagen19 from './assets/Carta/Platosfuertes/perro.jpg';
import imagen20 from './assets/Carta/Platosfuertes/Choriperro.jpg';
import imagen21 from './assets/Carta/Platosfuertes/salchipapa.jpg';
import imagen22 from './assets/Carta/Platosfuertes/carne.jpg';
import imagen23 from './assets/Carta/Platosfuertes/pechuga.jpg';
import imagen24 from './assets/Carta/Platosfuertes/costillas.jpg';

// Importar imágenes para bebidas
import imagen25 from './assets/Carta/Bebidas/agua.jpg';
import imagen26 from './assets/Carta/Bebidas/cerveza.jpg'; 
import imagen27 from './assets/Carta/Bebidas/cocacola.jpg';
import imagen28 from './assets/Carta/Bebidas/limonada.jpg';
import imagen29 from './assets/Carta/Bebidas/limonadacoco.jpg';
import imagen30 from './assets/Carta/Bebidas/limonadah.png';

const Carta = () => {
    const cards = [
        { id: 1, title: 'Aros de cebolla', image: imagen10, text: 'Este es el párrafo de la card 1.' },
        { id: 2, title: 'Chorizos a la parrilla', image: imagen11, text: 'Este es el párrafo de la card 2.' },
        { id: 3, title: 'Empanadas mixtas', image: imagen12, text: 'Este es el párrafo de la card 3.' },
        { id: 4, title: 'Sopa de la casa', image: imagen13, text: 'Este es el párrafo de la card 4.' },
        { id: 5, title: 'Ensalada a la parrilla', image: imagen14, text: 'Este es el párrafo de la card 5.' },
        { id: 6, title: 'Papas con queso', image: imagen15, text: 'Este es el párrafo de la card 6.' },
    ];

    const cards2 = [
        { id: 1, title: 'Hamburguesa a la parrilla', image: imagen16, text: 'Descripción del plato 1.' },
        { id: 2, title: 'Plato 2', image: imagen17, text: 'Descripción del plato 2.' },
        { id: 3, title: 'Plato 3', image: imagen18, text: 'Descripción del plato 3.' },
        { id: 4, title: 'Plato 4', image: imagen19, text: 'Descripción del plato 4.' },
        { id: 5, title: 'Plato 5', image: imagen20, text: 'Descripción del plato 5.' },
        { id: 6, title: 'Plato 6', image: imagen21, text: 'Descripción del plato 6.' },
        { id: 7, title: 'Plato 7', image: imagen22, text: 'Descripción del plato 7.' },
        { id: 8, title: 'Plato 8', image: imagen23, text: 'Descripción del plato 8.' },
        { id: 9, title: 'Plato 9', image: imagen24, text: 'Descripción del plato 9.' },
    ];

    const cards3 = [
        { id: 1, title: 'Agua', image: imagen25, text: 'Este es el párrafo de la card 1.' },
        { id: 2, title: 'Cerveza', image: imagen26, text: 'Este es el párrafo de la card 2.' },
        { id: 3, title: 'Coca Cola', image: imagen27, text: 'Este es el párrafo de la card 3.' },
        { id: 4, title: 'Limonada', image: imagen28, text: 'Este es el párrafo de la card 4.' },
        { id: 5, title: 'Limonada de Coco', image: imagen29, text: 'Este es el párrafo de la card 5.' },
        { id: 6, title: 'Limonada Hierbabuena', image: imagen30, text: 'Este es el párrafo de la card 6.' },
    ];

    return (
        <div className="main-container">
            <header className="header">
                <h1 className="main-title">NUESTRO MENU</h1> {/* Título principal */}
            </header>
            <div className="card-container">
                <h2 className="sub-title">ENTRADAS</h2> {/* Subtítulo dentro del contenedor de las cards */}
                <div className="card-grid">
                    {cards.map(card => (
                        <div key={card.id} className="card">
                            <div className="card-image-container">
                                <img src={card.image} alt={card.title} className="card-image" />
                            </div>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="card-container">
                <h2 className="sub-title">PLATOS FUERTES</h2> {/* Subtítulo dentro del contenedor de las cards */}
                <div className="card-grid">
                    {cards2.map(card => (
                        <div key={card.id} className="card">
                            <div className="card-image-container">
                                <img src={card.image} alt={card.title} className="card-image" />
                            </div>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="card-container">
                <h2 className="sub-title">BEBIDAS</h2> {/* Subtítulo dentro del contenedor de las cards */}
                <div className="card-grid">
                    {cards3.map(card => (
                        <div key={card.id} className="card">
                            <div className="card-image-container">
                                <img src={card.image} alt={card.title} className="card-image" />
                            </div>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carta;
