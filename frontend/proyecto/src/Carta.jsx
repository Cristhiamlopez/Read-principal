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
        { id: 1, title: 'Aros de cebolla', image: imagen10, text: 'Aros de cebolla apanados con salsa de la casa' },
        { id: 2, title: 'Chorizos a la parrilla', image: imagen11, text: '10 chorizos cocteleros a la parrilla con chimichurri' },
        { id: 3, title: 'Empanadas mixtas', image: imagen12, text: '6 mini empanadas de carne y pollo con ají' },
        { id: 4, title: 'Sopa de la casa', image: imagen13, text: 'Deliciosa sopa de verduras con pan de la casa tostado' },
        { id: 5, title: 'Ensalada a la parrilla', image: imagen14, text: 'Ensalada de lechuga, tomate a la parrilla y queso asado' },
        { id: 6, title: 'Papas con queso', image: imagen15, text: 'Papas con carne cubiertas de queso chedar fundido' },
    ];

    const cards2 = [
        { id: 1, title: 'Hamburguesa de la casa a la parrilla', image: imagen16, text: 'Hamburguesa a la parrilla con verduras' },
        { id: 2, title: 'Hamburguesa doble carne', image: imagen17, text: 'Hamburguesa doble carne a la parrilla' },
        { id: 3, title: 'Hamburguesa triple carne', image: imagen18, text: 'Hamburguesa triple carne a la parrilla' },
        { id: 4, title: 'Perro caliente', image: imagen19, text: 'Perro caliente con salchicha americana y papas' },
        { id: 5, title: 'Choriperro', image: imagen20, text: 'Perro com chorizo santarrosano y pico de gallo' },
        { id: 6, title: 'Salchipapa', image: imagen21, text: 'Salchipapa con salsa de la casa y maiz tierno' },
        { id: 7, title: 'Carne asada', image: imagen22, text: 'Deliciosa carne asada marinada con verduras' },
        { id: 8, title: 'Pechuga a la parrilla', image: imagen23, text: 'Pechuga a la parrilla con verduras y salsa de miel' },
        { id: 9, title: 'Costillas BBQ', image: imagen24, text: 'Deliciosas costillas con salsa BBQ casera y ensalada' },
    ];

    const cards3 = [
        { id: 1, title: 'Agua', image: imagen25, text: 'Agua con o sin gas' },
        { id: 2, title: 'Cerveza', image: imagen26, text: 'Cervezas nacionales' },
        { id: 3, title: 'Coca Cola', image: imagen27, text: 'Deliciosa Coca cola fria' },
        { id: 4, title: 'Limonada', image: imagen28, text: 'Deliciosa limonada natural' },
        { id: 5, title: 'Limonada de Coco', image: imagen29, text: 'Limonada natural de coco' },
        { id: 6, title: 'Limonada Hierbabuena', image: imagen30, text: 'Limonada natural de hierbabuena' },
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
