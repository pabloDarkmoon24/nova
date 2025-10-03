// src/pages/manuales/nova-metricas.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/manualNova.css";
import video from "../../assets/manuales/Nova-5.mp4"; // ← ajusta el nombre si tu archivo es otro

export function MetricsManualPage() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => videoRef.current?.play();

  return (
    <main className="nova-article">
      <div className="nova-wrap">
        {/* TÍTULO UNIFICADO */}
        <h2 className="nova-title">Bienvenidos a NOVA, gestión total.</h2>

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
            Recurso del manual: Métricas y dashboard en NOVA.
          </figcaption>
        </figure>

        {/* Contenido en una sola columna */}
        <section className="nova-content">
          <h3>Métricas y Dashboard en NOVA: datos en tiempo real</h3>

          <p>
            <strong>Bienvenidos a NOVA, Gestión Total.</strong> En esta sección hablaremos de las
            <strong> métricas</strong> que NOVA pone a tu disposición.
          </p>

          <p>
            Todas ellas se encuentran integradas en el <strong>dashboard</strong>, donde podrás
            consultar en tiempo real información clave para tu operación como ISP, tales como:
          </p>

          <ul>
            <li><strong>Número de clientes retirados</strong> en el último mes.</li>
            <li><strong>Cantidad de usuarios que ya pagaron</strong> sus servicios.</li>
            <li><strong>Valores pendientes por cobrar</strong>.</li>
            <li>Y muchas otras <strong>estadísticas útiles</strong> para tu gestión.</li>
          </ul>

          <p>
            Estas métricas te permiten <strong>evaluar el crecimiento de tu empresa</strong> de forma
            inmediata, identificar <strong>posibles fugas</strong> ocasionadas por decisiones
            operativas y analizar el <strong>impacto</strong> de cada nuevo plan u objetivo
            comercial que implementes.
          </p>

          <p>
            Con NOVA siempre contarás con <strong>datos reales, actualizados y precisos</strong>,
            lo que te ayudará a <strong>tomar decisiones estratégicas</strong> para fortalecer y
            optimizar tu negocio.
          </p>

          {/* Frase de cierre impactante */}
          <div className="nova-note">
            <strong>Lo que no se mide no se mejora:</strong> con NOVA decides con evidencia, en tiempo real.
          </div>

          <div className="nova-actions">
            <Link to="/nova/manuales" className="nova-back">← Volver a Ayuda</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
