import React from 'react';
import './Carta.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

function Carta() {
  return (
    <div>
      {/* Menu */}
      

      <h2 className="text-center mt-4">NUESTRO MENU</h2>

      {/* Menu entradas */}
      <div className="container bg-dark pb-5 text-center">
        <h3 className="text-white mt-4 pt-4">ENTRADAS</h3>
        <div className="row mt-4 mx-5">
          <div className="col-md-4 p-2">
            <div className="card bg-warning">
              <img src="img/menu/entradas/aros de cebolla.jpg" className="card-img-top" alt="Aros de cebolla" />
              <div className="card-body">
                <h4>Aros de cebolla</h4>
                <p className="card-text">Aros de cebolla apanados con salsa de la casa</p>
              </div>
            </div>
          </div>
          {/* Repite para otras entradas */}
        </div>
      </div>

      {/* Platos fuertes */}
      <div className="container bg-white pb-5 text-center">
        <h3 className="text-dark mt-4 pt-4">PLATOS FUERTES</h3>
        <div className="row mt-4 mx-5">
          <div className="col-md-4 p-2">
            <div className="card bg-warning">
              <img src="img/menu/Platos fuertes/dia-hamburguesa-m.jpg" className="card-img-top" alt="Hamburguesa a la parrilla" />
              <div className="card-body">
                <h4>Hamburguesa a la parrilla</h4>
                <p className="card-text">Hamburguesa a la parrilla con verduras</p>
              </div>
            </div>
          </div>
          {/* Repite para otros platos fuertes */}
        </div>
      </div>

      {/* Bebidas */}
      <div className="container bg-dark pb-5 text-center mb-5">
        <h3 className="text-white mt-4 pt-4">BEBIDAS</h3>
        <div className="row mt-4 mx-5">
          <div className="col-md-4 p-2">
            <div className="card bg-warning">
              <img src="img/menu/Bebidas/limonada.jpg" className="card-img-top" alt="Limonada natural sin azúcar" />
              <div className="card-body">
                <h4>Limonada natural sin azúcar</h4>
                <p className="card-text">Deliciosa limonada natural</p>
              </div>
            </div>
          </div>
          {/* Repite para otras bebidas */}
        </div>
      </div>

      <footer>
        <div className="container-fluid bg-dark text-center p-4 mb-1">
          <div className="row text-white">
            <div className="col-12 col-md-6 bg-dark pt-5 px-5">
              <h6>EL CORRIDO PARRILLA TU MEJOR OPCIÓN SI ESTÁS EN BOGOTÁ</h6>
            </div>
            <div className="col-12 col-md-6 bg-dark p-4">
              <p>Síguenos en nuestras redes sociales</p>
              <i className="bi bi-facebook p-2"></i>
              <i className="bi bi-instagram p-2"></i>
              <i className="bi bi-tiktok p-2"></i>
              <i className="bi bi-twitter p-2"></i>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Carta;