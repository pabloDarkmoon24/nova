// src/pages/manuales/nova.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/manualNova.css";
import video from "../../assets/manuales/nova-1.mp4";

export function NovaManualPage() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) videoRef.current.play();
  };

  return (
    <main className="nova-article">
      <div className="nova-wrap">
        {/* Título */}
        <h2 className="nova-title">
          NOVA: La nueva forma de administrar tu negocio
        </h2>

        {/* Video con overlay y botón */}
        <figure className="nova-figure">
          <div className="nova-video-wrap">
            <video
              ref={videoRef}
              className="nova-video"
              controls
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            >
              <source src={video} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>

            {!playing && (
              <>
                <div className="nova-video-bg" />
                <button
                  type="button"
                  className="nova-play"
                  aria-label="Reproducir video"
                  onClick={handlePlay}
                >
                  <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
                    <path fill="white" d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            )}
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: presentación de NOVA.
          </figcaption>
        </figure>

        {/* Contenido en una sola columna */}
        <section className="nova-content">
          <p>
            <strong>NOVA</strong> es un software moderno de administración diseñado
            para que las empresas trabajen de manera más ágil, organizada y rentable.
            Con esta herramienta, tu negocio puede centralizar todos sus procesos en
            un solo lugar, evitando pérdidas de tiempo y mejorando la productividad.
          </p>

          <h3>¿Qué hace diferente a NOVA?</h3>
          <ul>
            <li>
              <strong>Gestión completa desde un solo sistema:</strong> controla
              clientes, ventas, soporte, facturación y reportes sin depender de
              múltiples plataformas.
            </li>
            <li>
              <strong>Simplicidad y rapidez:</strong> su interfaz está pensada para
              que cualquier persona, sin importar su experiencia técnica, pueda
              manejarla con facilidad.
            </li>
            <li>
              <strong>Organización garantizada:</strong> todos los datos y tareas del
              día a día se mantienen actualizados y visibles en tiempo real.
            </li>
            <li>
              <strong>Escalabilidad:</strong> NOVA crece junto a tu empresa; puedes
              empezar con lo básico e ir sumando módulos según lo necesites.
            </li>
          </ul>

          <h3>Beneficios para tu empresa</h3>
          <ul>
            <li>
              <strong>Ahorro de tiempo:</strong> automatiza procesos repetitivos y
              reduce errores manuales.
            </li>
            <li>
              <strong>Mejor control:</strong> visualiza la información clave de tu
              negocio en paneles intuitivos.
            </li>
            <li>
              <strong>Decisiones más rápidas:</strong> con reportes claros y accesibles
              en segundos.
            </li>
            <li>
              <strong>Soporte al equipo:</strong> cada área cuenta con herramientas
              específicas que facilitan el trabajo de administración, facturación y
              servicio al cliente.
            </li>
          </ul>

          <div className="nova-actions">
            <Link to="/nova/manuales" className="nova-back">
              ← Volver a Ayuda
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
