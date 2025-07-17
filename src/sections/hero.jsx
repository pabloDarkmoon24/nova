
import '../styles/hero.css';
import card1 from '../assets/home/Menos-personal.png';
import card2 from '../assets/home/Mas-eficiencia.png';
import card3 from '../assets/home/Mejor-servicio.png';
import activaNova from '../assets/home/Activa-NOVA.png';
import beneficios from '../assets/home/Aumenta-tus-ingresos.png';
import robotVideo from '../assets/home/Banner.mp4';

export function Hero() {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="hero-text">
              <h1>El software que transformará tu ISP.</h1>
              <h2>Automatiza, controla y haz crecer tu operación con inteligencia.</h2>
            </div>
        <div className="row home-row">
          <div className="col-4 home-left">
            <div className="card-list">
              <img src={card1} alt="Menos personal" className="card-home" />
              <img src={card2} alt="Más eficiencia" className="card-home" />
              <img src={card3} alt="Mejor servicio" className="card-home" />
            </div>
            <img src={activaNova} alt="Activa Nova" className="btn-activa-nova" />
          </div>
          <div className="col-8 home-right">
            <div className="robot-video-container">
              <video
                src={robotVideo}
                autoPlay
                muted
                loop
                playsInline
                className="robot-video"
                poster=""
              />
            </div>
            <img src={beneficios} alt="Beneficios Nova" className="beneficios-home" />
          </div>
        </div>
      </div>
    </section>
  );
}
