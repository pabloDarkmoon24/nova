import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // aquí pones tus estilos específicos
import '../styles/grid.css'; // importa tu sistema de columnas
import logo from '../assets/navBar/Logo-NOVA.png'
import btngratuita from '../assets/navBar/Prueba-Gratuita.png'

function Navbar() {
  return (
    <nav className="main-navbar">
        <div className="container">
            <div className="row" style={{ alignItems: 'center', minHeight: '84px' }}>
            <div className="col-3 navbar-logo">
                <img src={logo} alt="Nova Logo" />
            </div>
            <div className="col-6 navbar-menu-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
                <ul className="navbar-menu">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/manuales">Manuales / Ayuda</Link></li>
                <li><Link to="/contacto">Contactamos</Link></li>
                </ul>
            </div>
            <div className="col-3 navbar-right" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a href="" type='submit'><img src={btngratuita} alt="Prueba Gratuita" /></a>
            </div>
            </div>
        </div>
        </nav>
  );
}
export default Navbar;
