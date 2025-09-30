import { Link } from "react-router-dom";
import "../../styles/manuales.css";
import flyer from "../../assets/manuales/6 pasos para migrar a NOVA.jpg"
export function PrimerosPasosPage() {
  return (
    <div className="ayuda-main">
      <section className="ayuda-hero">
        <div className="ayuda-hero-content">
          <h1>Primeros pasos</h1>
          <div className="ayuda-breadcrumb">
            <Link to="/nova/">Inicio</Link>
            <span className="ayuda-breadcrumb-sep">»</span>
            <Link to="/nova/manuales">Ayuda</Link>
            <span className="ayuda-breadcrumb-sep">»</span>
            <span>Primeros pasos</span>
          </div>
        </div>
      </section>

      <article className="manual-article">
        <div className="ma-wrap">
          <figure className="ma-figure">
            <img
              src={flyer}
              alt="Infografía: 6 pasos para migrar a NOVA"
              loading="lazy"
            />
            <figcaption className="ma-figcaption">
              Infografía de referencia con el flujo completo de migración.
            </figcaption>
          </figure>

          <div className="ma-content">
            <h2>6 pasos para migrar a NOVA</h2>
            <p>
              Esta guía resume el proceso para pasar tu operación a NOVA de forma
              simple. Si eres de las personas visuales, revisa la infografía;
              abajo tienes el mismo contenido explicado paso a paso.
            </p>

            <ol className="ma-steps">
              <li>
                <strong>Prepara tu base de datos.</strong> Exporta tus datos en
                formato <em>CSV</em> usando la plantilla oficial de NOVA. Asegúrate
                de que cada usuario tenga su información completa.
              </li>
              <li>
                <strong>Separa 2 horas.</strong> Solo necesitas un bloque corto de
                tiempo para migrar sin estrés.
              </li>
              <li>
                <strong>Agenda con nuestro equipo.</strong> Coordinamos contigo la
                fecha y la hora ideal para acompañarte.
              </li>
              <li>
                <strong>¿Necesitas ayuda?</strong> Si requieres soporte adicional,
                lo agendamos. No estás solo/a en el proceso.
              </li>
              <li>
                <strong>Revisamos la plantilla.</strong> Verificamos que los datos
                estén bien estructurados y sin errores antes de cargar.
              </li>
              <li>
                <strong>Personalizamos y conectamos.</strong> Ajustamos NOVA a tu
                operación y conectamos tus equipos.
              </li>
            </ol>
            <div className="ma-actions">
              <Link to="/nova/manuales" className="ma-back">← Volver a Ayuda</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
