import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png';
import './Navbar.css'; // Importa el archivo CSS

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Navbar">
      <nav role="navigation" aria-label="Main navigation">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <span className="logo-text">Corrido Parrilla</span>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'show-menu' : ''}`}>
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
