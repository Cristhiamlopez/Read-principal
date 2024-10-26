import React from 'react';
import './Inicio.css'; // Archivo CSS para los estilos

// Importar imágenes de los botones

import imagen31 from './assets/Inicio/inventario.png';
import imagen32 from './assets/Inicio/ventas.png'; 
import imagen33 from './assets/Inicio/menu.png';
import imagen34 from './assets/Inicio/mesas.png';
import imagen35 from './assets/Inicio/pedidos.png';
import imagen36 from './assets/Inicio/domicilio.png';


const Inicio = () => {
    const cards = [
        { id: 1, title: 'INVENTARIO', image: imagen31,},
        { id: 2, title: 'VENTAS', image: imagen32,},
        { id: 3, title: 'MENU', image: imagen33, },
        { id: 4, title: 'MESAS', image: imagen34,},
        { id: 5, title: 'PEDIDOS', image: imagen35,},
        { id: 6, title: 'DOMICILIOS', image: imagen36,},
    ];

    return (
        <div className="main-containerini">
            <header className="headerini">
                <h1 className="main-titleini">MENU PRINCIPAL</h1> {/* Título principal */}
            </header>
            <div className="card-containerini">
                <div className="card-gridini">
                    {cards.map(card => (
                        <div key={card.id} className="cardini">
                            <h3 className="card-titleini">{card.title}</h3>
                            <div className="card-image-containerini">
                                <img src={card.image} alt={card.title} className="card-imageini" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Inicio;
