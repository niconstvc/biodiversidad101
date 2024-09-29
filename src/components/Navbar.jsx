import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems }) => {
  return (
    <header>
      {/* Barra superior */}
      <div className="top-bar">
        <p>¡Bienvenidos a nuestra tienda ecológica!</p>
        <div className="top-links">
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register">Registrarse</Link>
        </div>
      </div>
      
      {/* Barra principal de navegación */}
      <div className="main-navbar">
        <div className="logo">
          <Link to="/">Biodiversidad.cl</Link>
        </div>
        
        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
          <button><i className="bi bi-search"></i></button>
        </div>

        {/* Acciones del usuario */}
        <div className="user-actions">
          <Link to="/dashboard">
            <i className="bi bi-person"></i> Perfil
          </Link>
          <Link to="/cart">
            <i className="bi bi-cart"></i> 
            {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
          </Link>
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className="menu-bar">
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Navbar;
