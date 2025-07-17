import '../styles/analisisp1.css'
import pcAnalisis from '../assets/analisis/Software NOVA.png'; // Ajusta el path al tuyo

export function InteligenciaAnalisis() {
  return (
    <section className="analisis-section">
      <div className="container">
        <h1 className="analisis-titulo">INTELIGENCIA + ANÁLISIS</h1>
        <div className="row align-items-center">
          <div className="col-6 analisis-texto1">
            <h3 className="analisis-subtitulo">
              Analiza tu datos en tiempo real con nuestras potentes herramientas
            </h3>
            <p className="analisis-desc">
              Tomar decisiones para el crecimiento de tu empresa es más efectivo si estás al tanto de las variables que componen tu operación.
            </p>
          </div>
          <div className="col-6 analisis-img-area">
            <img src={pcAnalisis} alt="PC Análisis" className="analisis-pc-img" />
          </div>
        </div>
      </div>
    </section>
  );
}