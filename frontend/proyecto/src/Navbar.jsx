import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png';
import './Navbar.css'; // Importa el archivo CSS

function Navbar() {
  return (
    <div className="Navbar">
      <nav role="navigation" aria-label="Main navigation">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <span className="logo-text">Corrido Parrilla</span>
        </div>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Carta">Menu</Link></li>
          <li><Link to="/login">Login</Link></li>

        </ul>
        <div className="Search-box">
          <input type="text" placeholder="Buscar" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;