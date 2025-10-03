import '../styles/footer.css'; // Suponiendo que el CSS irá aquí
import logoNova from '../assets/footer/Logo-NOVA.png'; // Cambia la ruta si es necesario

export function Footer() {
return (
    <>
      {/* SoporteBox: Encima del footer */}
      <div className="soporte-box-absolute">
        <div className="soporte-box">
          <div className="soporte-box-left">
            <span className="soporte-box-title">
              ¿Necesitas soporte? Contáctanos
            </span>
          </div>
          <div className="soporte-box-right">
            <div className="soporte-box-phone">+57 320 500 5001</div>
            <div className="soporte-box-link">Preguntas frecuentes</div>
          </div>
        </div>
      </div>

      <footer className="footer-section">
        <div className="footer-bg" />
        <div className="container footer-container">
          <div className="row">
            {/* Columna 1: Marca */}
            <div className="col-4 footer-brand">
              <img src={logoNova} alt="Nova Logo" className="footer-logo" />
              <p className="footer-desc">
                Nova Gestión total. Nova es<br />
                desarrollado por Servired LMA<br />
                Comunicaciones S.A.S
              </p>
            </div>
            {/* Columna 2: Enlaces */}
            <div className="col-2 footer-links">
              <div className="footer-title">Enlaces de interés</div>
              <ul>
                <li>Inicio</li>
                <li>Acerca de Nova</li>
                <li>Servicios</li>
                <li>Blog</li>
              </ul>
            </div>
            {/* Columna 3: Ayuda y soporte */}
            <div className="col-3 footer-links">
              <div className="footer-title">Ayuda y soporte</div>
              <ul>
                <li>Contactanos</li>
                <li>Preguntas frecuentes</li>
                <li>Trabaja con nosotros</li>
                <li>Términos y condiciones</li>
                <li>Política de privacidad</li>
              </ul>
            </div>
            {/* Columna 4: Contacto */}
            <div className="col-3 footer-contact">
              <div className="footer-title">Contactanos</div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                Cra 15 # 15–13<br />Santa Rosa de cabal - Colombia
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                Llámanos<br />+57–320–5005001
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                Escríbenos<br />soporte@novaisp.co
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}