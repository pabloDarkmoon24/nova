import React from 'react';
import { useState } from 'react';
import '../styles/manuales.css'; // tu archivo de estilos
import { Footer } from '../components/footer';

// Componente simple de acordeón
function ManualAccordion({ pregunta, respuesta }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`manual-acordeon ${open ? 'open' : ''}`}>
      <button className="manual-pregunta" onClick={() => setOpen(!open)}>
        <span className="manual-icon">
          <svg height="28" viewBox="0 0 24 24" fill="#7b4cfb"><circle cx="12" cy="12" r="12"/><text x="8" y="17" fontSize="13" fill="#fff">?</text></svg>
        </span>
        <span className="manual-text">{pregunta}</span>
        <span className="manual-toggle">{open ? '−' : '+'}</span>
      </button>
      <div className="manual-respuesta" style={{ display: open ? 'block' : 'none' }}>
        {respuesta}
      </div>
    </div>
  );
}

export function ManualPage() {
  return (
    <div className="ayuda-main">
      <section className="ayuda-hero">
        <div className="ayuda-hero-content">
          <h1>Ayuda</h1>
          <div className="ayuda-breadcrumb">
            <span>Inicio</span>
            <span className="ayuda-breadcrumb-sep">{'»'}</span>
            <span>Ayuda</span>
          </div>
        </div>
        {/* Aquí puedes colocar los SVG decorativos si quieres */}
      </section>

      <section className="ayuda-manuales-section">
        <h2>
          <span className="ayuda-titulo-principal">AYUDA</span>
          <span> – Manuales</span>
        </h2>
        <p className="ayuda-subtitle">
          Encuentra los manuales para el uso de nuestra herramienta
        </p>
        <div className="ayuda-manuales-list">
          <ManualAccordion
            pregunta="Primeros pasos"
            respuesta="Aquí irá el contenido de primeros pasos..."
          />
          <ManualAccordion
            pregunta="¿Cuáles son los medios de pago?"
            respuesta="Aquí irá la información sobre medios de pago..."
          />
          {/* Agrega más ManualAccordion según tus manuales */}
        </div>
      </section>
      <Footer/>
    </div>
    
  );
}



