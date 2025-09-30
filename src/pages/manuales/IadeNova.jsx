// src/pages/manuales/nova-asistente-ia.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/manualNova.css";
import video from "../../assets/manuales/Nova-AsistenteIA.mp4"; // ajusta el path si es necesario

export function AsistenteIaManualPage() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => videoRef.current?.play();

  return (
    <main className="nova-article">
      <div className="nova-wrap">
        {/* Título coherente con el contenido */}
        <h2 className="nova-title">Asistente de IA de NOVA: soporte y ventas 24/7</h2>

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
            Recurso del manual: Bot automatizado de inteligencia artificial.
          </figcaption>
        </figure>

        {/* Contenido */}
        <section className="nova-content">
          <h3>Hola, bienvenidos a NOVA, gestión total.</h3>
          <p>
            Hoy queremos hablarles de una de las herramientas más innovadoras que ofrece NOVA:
            nuestro <strong>bot automatizado de inteligencia artificial</strong>.
          </p>

          <h3>¿Qué resuelve el bot de IA?</h3>
          <ul>
            <li><strong>Cortes de internet.</strong></li>
            <li><strong>Cambios de contraseña.</strong></li>
            <li><strong>Ajustes en las conexiones.</strong></li>
            <li><strong>Modificaciones en la red.</strong></li>
          </ul>

          <p>
            Funciona <strong>24/7</strong>, y puede ser <strong>activado o desactivado</strong> en cualquier
            momento según la necesidad del negocio.
          </p>

          <h3>Asesor comercial 24/7</h3>
          <p>
            Además del soporte técnico, el bot también puede desempeñar el papel de
            <strong> asesor comercial</strong>. Si un cliente quiere información o desea adquirir un servicio,
            el bot estará disponible en cualquier horario —ya sea a la 1 de la mañana o en horas de alta demanda— para:
          </p>
          <ul>
            <li><strong>Verificar</strong> si hay cobertura.</li>
            <li><strong>Explicar</strong> qué planes están disponibles.</li>
            <li><strong>Acompañar</strong> al cliente en todo el proceso de compra.</li>
          </ul>

          <p>
            De esta manera, su empresa <strong>nunca perderá una venta</strong> y sus clientes siempre
            tendrán <strong>atención inmediata</strong>.
          </p>

          <div className="nova-note">
            Bienvenidos a <strong>NOVA</strong>, donde <strong>la tecnología trabaja para usted</strong>.
          </div>

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
