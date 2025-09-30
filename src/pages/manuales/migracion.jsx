// src/pages/manuales/nova-crece.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/manualNova.css";
import video from "../../assets/manuales/Nova 2.mp4"; // ajusta el path si es necesario

export function NovaManualGrowPage() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => videoRef.current?.play();

  return (
    <main className="nova-article">
      <div className="nova-wrap">
        {/* Título actualizado */}
        <h2 className="nova-title">Proceso para migrar a NOVA</h2>

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
            Recurso del manual: “Proceso para migrar a NOVA”.
          </figcaption>
        </figure>

        {/* Contenido NUEVO (solo migración) */}
        <section className="nova-content">
          <h3>Bienvenidos a NOVA, gestión total</h3>
          <p>
            Hoy hablaremos de los pasos a seguir para realizar la{" "}
            <strong>migración de sus clientes</strong> directamente a nuestra plataforma.
          </p>

          <h3>1) Preparación de la base de datos</h3>
          <p>
            Lo primero es organizar la información de sus clientes e integrarla en el{" "}
            <strong>documento de Excel diseñado por NOVA</strong>. Este archivo es la base para
            que la migración se realice de manera ágil y ordenada.
          </p>

          <h3>2) Reserva de tiempo</h3>
          <p>
            Es importante destinar <strong>al menos dos horas continuas</strong> para llevar a
            cabo todo el proceso de migración sin interrupciones.
          </p>

          <h3>3) Coordinación con el equipo NOVA</h3>
          <p>
            Una vez tenga lista la base de datos, deberá comunicarse con nuestro equipo para{" "}
            <strong>programar la fecha de la migración</strong> y dar inicio al proceso.
          </p>

          <h3>4) Acompañamiento personalizado</h3>
          <p>
            En la sesión pactada, el equipo NOVA lo <strong>guiará paso a paso</strong>,
            asegurando la correcta personalización e integración de cada cliente en la
            plataforma, de modo que pueda comenzar a trabajar con NOVA de la mejor manera
            posible.
          </p>

          <div className="nova-note">
            <strong>Con NOVA, usted no está solo.</strong> Nuestro equipo estará presente en
            todo el circuito de migración para garantizar que la transición sea{" "}
            <strong>clara, sencilla y eficiente</strong>.
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
