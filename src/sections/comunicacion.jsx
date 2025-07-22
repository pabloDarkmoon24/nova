import '../styles/comunicacion.css'
import imgPCMensajeria from '../assets/comunicacion/Comunicacion-rapida.png'
import imgMensajesMasivos from '../assets/comunicacion/Mensajes-masivos.png'
import imgInboxMuchosCanales from '../assets/comunicacion/Un-inbox.png'
import imgDemoBox from '../assets/comunicacion/OBSEQUIO.png'

export function Comunicacion() {
    return(
        <section className="seccion-mensajes">
            <div className="container">
                {/* Fila principal: PC y texto, dos columnas */}
                <div className="row mensajes-row">
                    <div className="mensajes-textos">
                        <div className="mensajes-titulo">
                        Comunicación rápida,<br />
                        clara y sin interrupciones
                        </div>
                        <div className="mensajes-desc">
                        Integramos <b>Whatsapp, Telegram, SMS, Email, Instagram y Facebook.</b><br /><br />
                        Mantén la comunicación con tus clientes <b>en un mismo sitio</b>, y no te pierdas nunca más un mensaje.
                        </div>
                    </div>
                    <div className="mensajes-pc-img-area">
                        <img src={imgPCMensajeria} alt="Mensajería" className="mensajes-pc-img" />
                    </div>
                    </div>

                {/* Tarjetas de mensajes */}
                <div className="row justify-content-center mt-3">
                <div className="col-12 d-flex flex-column align-items-center">
                    <img src={imgMensajesMasivos} alt="Mensajes Masivos" className="mensajes-card-img" />
                    <img src={imgInboxMuchosCanales} alt="Un Inbox muchos canales" className="mensajes-card-img" />
                </div>
                </div>

                {/* DEMO BOX - imagen morada */}
                <div className="row justify-content-center">
                <div className="col-12 demo-img-box">
                    <img src={imgDemoBox} alt="Activa tu demo gratuita" className="demo-img" />
                </div>
                </div>
            </div>
            </section>
    )
    
} 