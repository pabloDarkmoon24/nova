import '../styles/hacerConNova.css';

import card1 from '../assets/hacer-con-nova/Automatizacion-total.png';
import card2 from '../assets/hacer-con-nova/Agenda-de-tecnicos.png';
import card3 from '../assets/hacer-con-nova/Panales-de-analisis.png';
import card4 from '../assets/hacer-con-nova/Vehiculos-con-GPS.png';
import card5 from '../assets/hacer-con-nova/Chatbot-con-IA.png';
import card6 from '../assets/hacer-con-nova/Facturacion-integrad.png';
import card7 from '../assets/hacer-con-nova/Inventario-inteligente.png';
import card8 from '../assets/hacer-con-nova/Reportes-legales.png';

import btnPrueba from '../assets/hacer-con-nova/Prueba-gratuita.png';

export function HacerConNova() {
  return (
    <section className="hacer-nova">
      <div className="container">
        <h2 className="hacer-nova-title">¿Qué puedes hacer con NOVA?</h2>
        <p className="hacer-nova-subtitle">
          Mejora tu atención al cliente y mantén el control de tu red,<br />
          de forma simple y continua.
        </p>
        <div className="hacer-nova-row ">
            <div className="hacer-nova-card-col hacer-nova-card-col-left">
                <img src={card1} alt="" className="hacer-nova-card" />
                <img src={card2} alt="" className="hacer-nova-card" />
                <img src={card3} alt="" className="hacer-nova-card" />
                <img src={card4} alt="" className="hacer-nova-card" />
            </div>
            <div className="hacer-nova-card-col hacer-nova-card-col-right">
                <img src={card5} alt="" className="hacer-nova-card" />
                <img src={card6} alt="" className="hacer-nova-card" />
                <img src={card7} alt="" className="hacer-nova-card" />
                <img src={card8} alt="" className="hacer-nova-card" />
            </div>
            </div>
        <div className="row">
          <div className="col-12 text-center">
            <img src={btnPrueba} alt="Prueba gratuita" className="btn-prueba-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
