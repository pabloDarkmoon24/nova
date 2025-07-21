import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import '../styles/grid.css';
import logo from '../assets/navBar/Logo-NOVA.png';
import btngratuita from '../assets/navBar/Prueba-Gratuita.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="main-navbar">
      <div className="container">
        <div className="row" style={{ alignItems: 'center', minHeight: '84px', position: 'relative' }}>
          <div className="col-3 navbar-logo">
            <img src={logo} alt="Nova Logo" />
          </div>
          {/* Hamburguesa */}
          <button
            className={`navbar-burger${menuOpen ? ' open' : ''}`}
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          {/* Menú central */}
          <div className={`navbar-menu-wrapper${menuOpen ? ' open' : ''}`}>
            <ul className="navbar-menu">
              <li>
                <Link
                  to="/nova/"
                  className={location.pathname === '/nova/' ? 'active' : ''}
                  onClick={closeMenu}
                >Inicio</Link>
              </li>
              <li>
                <Link
                  to="/nova/manuales"
                  className={location.pathname === '/nova/manuales' ? 'active' : ''}
                  onClick={closeMenu}
                >Manuales / Ayuda</Link>
              </li>
              <li>
                <Link
                  to="/nova/contacto"
                  className={location.pathname === '/nova/contacto' ? 'active' : ''}
                  onClick={closeMenu}
                >Contactamos</Link>
              </li>
              {/* Botón Prueba Gratuita en móvil */}
              <li className="navbar-menu-btn-mobile">
                <a href="#">
                  <img src={btngratuita} alt="Prueba Gratuita" className="navbar-btn-mobile-img"/>
                </a>
              </li>
            </ul>
          </div>
          {/* Botón Prueba Gratuita (solo visible en desktop) */}
          <div className="col-3 navbar-right">
            <a href="#"><img src={btngratuita} alt="Prueba Gratuita" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
