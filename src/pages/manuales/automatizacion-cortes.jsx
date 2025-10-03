// src/pages/manuales/nova-automatizacion-cortes.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/manualNova.css";
import video from "../../assets/manuales/Nova-4.mp4"; // cambia si tienes un video específico

export function CortesAutoManualPage() {
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
            Recurso del manual: Automatización de cortes y reconexiones.
          </figcaption>
        </figure>

        {/* Contenido */}
        <section className="nova-content">
          <h3>Automatización de cortes y reconexiones en NOVA</h3>
          <p>
            Hoy hablaremos de las herramientas automatizadas que NOVA pone al servicio de tu
            operación.
          </p>

          <p>
            NOVA cuenta con un sistema inteligente que gestiona de manera automática los procesos
            de <strong>facturación</strong>, <strong>corte</strong> y <strong>reconexión</strong> de servicios:
          </p>

          <ul>
            <li>
              <strong>Seguimiento preciso</strong> de cada cliente y su <strong>fecha de corte</strong>.
            </li>
            <li>
              <strong>Envío de la factura</strong> en el momento adecuado para que el cliente pueda
              efectuar el pago.
            </li>
            <li>
              Si el pago no se realiza a tiempo, el sistema <strong>ejecuta automáticamente la
              desconexión</strong>.
            </li>
            <li>
              Una vez registrado el pago, NOVA <strong>procede con la reconexión inmediata</strong>
              del servicio.
            </li>
          </ul>

          <p>
            De esta manera, no necesitas tener un equipo humano vigilando cada cuenta las 24 horas,
            ni gestionando cortes manuales día a día. NOVA se encarga de todo de forma segura, rápida
            y autónoma, <strong>reduciendo la carga operativa</strong> de tu empresa y permitiéndote
            concentrarte en lo realmente importante: <strong>hacer crecer tu negocio</strong>.
          </p>

          {/* Frase de cierre impactante */}
          <div className="nova-note">
            <strong>Automatiza hoy y gana tiempo mañana:</strong> con NOVA, cada proceso fluye y tu equipo
            se enfoca en crecer.
          </div>

          <div className="nova-actions">
            <Link to="/nova/manuales" className="nova-back">← Volver a Ayuda</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
