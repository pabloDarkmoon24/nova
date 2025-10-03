import React from "react";
import { Link } from "react-router-dom";
import "../styles/manuales.css";
import { Footer } from "../components/footer";

// Acordeón simple para otros ítems
function ManualAccordion({ pregunta, respuesta }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`manual-acordeon ${open ? "open" : ""}`}>
      <button className="manual-pregunta" onClick={() => setOpen(!open)}>
        <span className="manual-icon">❓</span>
        <span className="manual-text">{pregunta}</span>
        <span className="manual-toggle">{open ? "−" : "+"}</span>
      </button>
      <div className="manual-respuesta" style={{ display: open ? "block" : "none" }}>
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
            <span className="ayuda-breadcrumb-sep">»</span>
            <span>Ayuda</span>
          </div>
        </div>
      </section>

      <section className="ayuda-manuales-section">
        <h2>
          <span className="ayuda-titulo-principal">AYUDA</span>
          <span> – Manuales</span>
        </h2>
        <p className="ayuda-subtitle">Encuentra los manuales para el uso de nuestra herramienta</p>

        <div className="ayuda-manuales-list">
          {/* Tarjeta existente */}
          <Link to="/nova/manuales/primeros-pasos" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">📘</div>
              <div>
                <div className="mlc-title">Primeros pasos</div>
                <div className="mlc-desc">Infografía + guía paso a paso para migrar a NOVA.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          {/* NOVA (presentación general) */}
          <Link to="/nova/manuales/nova" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">🎬</div>
              <div>
                <div className="mlc-title">De dónde nace NOVA</div>
                <div className="mlc-desc">Conoce qué es NOVA.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          {/* ✅ NUEVO: NOVA CRECE */}
          <Link to="/nova/manuales/Migracion" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">🚀</div>
              <div>
                <div className="mlc-title">Migracion de clientes</div>
                <div className="mlc-desc">Proceso de Migracion</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/nova/manuales/asistente-ia" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">🤖</div>
              <div>
                <div className="mlc-title">Asistente de IA de NOVA</div>
                <div className="mlc-desc">Soporte técnico y asesor comercial 24/7.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>
          <Link to="/nova/manuales/automatizacion-cortes" className="manual-link-card">
          <div className="mlc-left">
            <div className="mlc-icon">⚡</div>
            <div>
              <div className="mlc-title">Automatización de cortes y reconexiones</div>
              <div className="mlc-desc">Cómo NOVA corta/reconecta servicios y reduce carga operativa.</div>
            </div>
          </div>
          <div className="mlc-arrow">→</div>
        </Link>

        <Link to="/nova/manuales/metricas-dashboard" className="manual-link-card">
          <div className="mlc-left">
            <div className="mlc-icon">📊</div>
            <div>
              <div className="mlc-title">Métricas y Dashboard</div>
              <div className="mlc-desc">Datos en tiempo real para decisiones estratégicas.</div>
            </div>
          </div>
          <div className="mlc-arrow">→</div>
        </Link>
        </div>
      </section>

      <Footer/>
    </div>
    
  );
}
