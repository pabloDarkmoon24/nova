import { Footer } from '../components/footer';
import '../styles/contacto.css';

export function ContactoPage() {
  return (
    <div className="contacto-main">
      {/* HERO */}
      <section className="contacto-hero">
        <div className="contacto-hero-content">
          <h1>Contactanos</h1>
          <div className="contacto-breadcrumb">
            <span>Inicio</span>
            <span className="contacto-breadcrumb-sep">{'»'}</span>
            <span>Contactanos</span>
          </div>
        </div>
        {/* Puedes agregar SVG decorativos como en tu imagen */}
      </section>

      {/* CARDS */}
      <section className="contacto-cards-section">
        <div className="contacto-cards-grid">
          {/* CARD 1 */}
          <div className="contacto-card">
            <div className="contacto-icon">
              {/* Ícono Email */}
              <svg width="58" height="58" viewBox="0 0 60 60" fill="none">
                <defs>
                  <radialGradient id="grad1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#a494fd" />
                    <stop offset="100%" stopColor="#7b4cfb" />
                  </radialGradient>
                </defs>
                <circle cx="30" cy="30" r="28" fill="url(#grad1)" />
                <path d="M17 22h26v16H17V22zm0 0l13 10 13-10" stroke="#fff" strokeWidth="2" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div className="contacto-card-title">¿Te gustaría conocer más?</div>
            <div className="contacto-card-desc">Agenda una cita con nuestro equipo de ventas</div>
            <div className="contacto-card-data contacto-card-email">ventas@novaisp.co</div>
          </div>
          {/* CARD 2 */}
          <div className="contacto-card">
            <div className="contacto-icon">
              {/* Ícono Ubicación */}
              <svg width="58" height="58" viewBox="0 0 60 60" fill="none">
                <defs>
                  <radialGradient id="grad2" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#a494fd" />
                    <stop offset="100%" stopColor="#7b4cfb" />
                  </radialGradient>
                </defs>
                <circle cx="30" cy="30" r="28" fill="url(#grad2)" />
                <path d="M30 18c-6 0-10 4-10 9 0 7 10 15 10 15s10-8 10-15c0-5-4-9-10-9zm0 13a4 4 0 110-8 4 4 0 010 8z" stroke="#fff" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="contacto-card-title">Visita nuestras instalaciones</div>
            <div className="contacto-card-desc">Visítanos en nuestras instalaciones</div>
            <div className="contacto-card-data">
              <b>Cra 15 # 15–13, Santa Rosa de<br />Cabal – Colombia</b>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="contacto-card">
            <div className="contacto-icon">
              {/* Ícono Teléfono */}
              <svg width="58" height="58" viewBox="0 0 60 60" fill="none">
                <defs>
                  <radialGradient id="grad3" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#a494fd" />
                    <stop offset="100%" stopColor="#7b4cfb" />
                  </radialGradient>
                </defs>
                <circle cx="30" cy="30" r="28" fill="url(#grad3)" />
                <path d="M24 20c2 6 8 12 14 14l4-4a2 2 0 012 2v6a2 2 0 01-2 2c-12 0-22-10-22-22a2 2 0 012-2h6a2 2 0 012 2l-4 4z" stroke="#fff" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="contacto-card-title">Llamanos</div>
            <div className="contacto-card-desc">Contacta nuestro equipo de ventas</div>
            <div className="contacto-card-data contacto-card-phone">
              <b>+57 320 5005001</b>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
