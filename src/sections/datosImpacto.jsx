import carta1 from '../assets/datosImpacto/Causas-frecuentes.png';
import carta2 from '../assets/datosImpacto/Porque-se-retiran-tus-clientes.png';
import carta3 from '../assets/datosImpacto/Tus-zonas-con-mas-impacto.png';
import carta4 from '../assets/datosImpacto/Campañas-mas-efectivas.png';
import imgX from '../assets/datosImpacto/X-icon.png';
import imgCelular from '../assets/datosImpacto/Mobile-NOVA.png';
import '../styles/datosImpacto.css'

export function DatosImpacto() {
  return (
    <section className="datos-impacto-section">
      <div className="container">
        {/* Cartas superiores */}
        <div className="cartas-grid">
        <div className="carta"><img src={carta1} alt="" /></div>
        <div className="carta"><img src={carta2} alt="" /></div>
        <div className="carta"><img src={carta3} alt="" /></div>
        <div className="carta"><img src={carta4} alt="" /></div>
      </div>
        {/* Mensaje debajo de cartas */}
        <div className="row justify-content-center">
  <div className="cartas-info-text">
    Estos son algunos de los datos que podrás analizar para tomar las mejores decisiones para tu empresa.
  </div>
</div>
        {/* Recuadro blanco con X */}
        <div className="row justify-content-center">
          <div className="col-12 d-flex justify-content-center">
            <div className="info-blanca">
              <img src={imgX} alt="Cerrar" className="x-left" />
              <div className="info-blanca-content">
                <div className="info-blanca-grid">
                  <div className="recuadro arriba izq">
                    <div className="recuadro-title">¿Excel? No es necesario.</div>
                    <div className="recuadro-text">Gráficas y tendencias en tiempo real, filtros inteligentes, exportación con un clic.</div>
                  </div>
                  <div className="recuadro arriba der">
                    <div className="recuadro-title">Un router no es un cliente</div>
                    <div className="recuadro-text">NOVA centraliza la información por cliente, para trazabilidad completa.</div>
                  </div>
                  <div className="recuadro abajo" style={{ gridColumn: '1 / 3' }}>
                    <div className="recuadro-title">Conoce mejor a tus suscriptores.</div>
                    <div className="recuadro-text">
                      Nova analiza y califica los hábitos de pago de tus clientes para que puedas dirigir campañas a quienes tienen mejor comportamiento financiero, facilitando la gestión de productos de valor agregado.
                    </div>
                  </div>
                </div>
              </div>
              <img src={imgX} alt="Cerrar" className="x-right" />
            </div>
          </div>
        </div>
        {/* Celular y texto final */}
        <div className="row celular-row">
          <div className="col-6 celular-texto">
            <div className="celular-title">¿Qué hace nuestro Software por ti?</div>
            <ul className="celular-list">
              <li><b>Con inteligencia artificial, Nova monitorea en tiempo real tu red, usando protocolos como SNMP, Websockets, Telnet y SSH.</b></li>
              <br />
              <li> Detecta fallas anticipadamente y notifica antes de que el cliente lo reporte.</li>
            </ul>
          </div>
          <div className="col-6 celular-img">
            <img src={imgCelular} alt="Celular Nova" />
          </div>
        </div>
      </div>
    </section>
  );
}
