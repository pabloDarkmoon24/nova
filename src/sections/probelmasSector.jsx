import '../styles/probelmasSector.css';
import bgMorado from '../assets/problemas/plus.png';
import pcFondo from '../assets/problemas/NOVA-+-IA.png';
import fibra from '../assets/problemas/Fibra.png';
import radio from '../assets/problemas/Radio.png';
import F1 from '../assets/problemas/zte.png'
import F2 from '../assets/problemas/hawei.png'
import F3 from '../assets/problemas/data.png'
import F4 from '../assets/problemas/vsol.png'
import R1 from '../assets/problemas/ubiquiti.png'
import R2 from '../assets/problemas/mimosa.png'
import R3 from '../assets/problemas/cambium.png'
import R4 from '../assets/problemas/mikrotik.png'


export function ProblemasSector() {
  return (
    <section className="problemas-sector">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h2 className="problemas-title">
          Solucionamos problemas reales del sector
        </h2>
        <p className="problemas-subtitle">
          Seguir gestionando tu ISP de forma manual te hace perder <br /> tiempo, dinero y clientes.
        </p>
      </div>
    </div>

    <div className="row main-content-row">
      {/* Columna PC */}
      <div className="col-5 pc-area">
        <img src={pcFondo} alt="Panel Nova PC" className="pc-img" />
      </div>
      {/* Columna imagen morada */}
      <div className="col-7 problemas-morado-area">
        <img src={bgMorado} alt="Problemas del sector" className="problemas-img-morado" />
      </div>
    </div>

    {/* MARCAS */}
    <div className="row marcas-row">
      <div className="col-12 text-center marcas-subtitle">
        NOVA combina lo mejor del área comercial<br />
        con un control total de tu infraestructura técnica.
      </div>
    </div>
    <div className="row marcas-bar">
      <div className="col-12 marcas-fibra">
        <img src={fibra} alt="Fibra" className="barra-fibra" />
        <img src={F1} alt="ZTE" className="logo-marca" />
        <img src={F2} alt="Huawei" className="logo-marca" />
        <img src={F3} alt="Data" className="logo-marca" />
        <img src={F4} alt="V-SOL" className="logo-marca" />
      </div>
    </div>
    <div className="row marcas-bar">
      <div className="col-12 marcas-radio">
        <img src={radio} alt="Radio" className="barra-radio" />
        <img src={R1} alt="Ubiquiti" className="logo-marca" />
        <img src={R2} alt="Mimosa" className="logo-marca" />
        <img src={R3} alt="Cambium" className="logo-marca" />
        <img src={R4} alt="Mikrotik" className="logo-marca" />
      </div>
    </div>
  </div>
</section>
  );
}
