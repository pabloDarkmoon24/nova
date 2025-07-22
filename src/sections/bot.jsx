import '../styles/bot.css'
import imgManoCelular from '../assets/bot/bot-con-IA.png'
import imgLaptopNube from '../assets/bot/gestion-documental.png'

export function Bot() {
  return(
        <section className="seccion-gestion">
            <div className="container">
                <div className="row align-items-center">
                    {/* PRIMERA FILA: Imagen Izquierda, Texto Derecha (claro) */}
                    <div className="col-6 seccion-gestion-col">
                        <div className="seccion-gestion-imgbox imgbox-izq">
                            <img src={imgManoCelular} alt="" className="img-mano-celular" />
                        </div>
                        <div className="seccion-gestion-texto gestion-texto-der">
                            <div className="gestion-titulo">
                                • ChatBot con IA
                            </div>
                            <div className="gestion-desc">
                                Tareas como cambios de la contraseña WIFI, aumentos de velocidad, cambio de canal y ancho de canal WIFI, pueden ser atendidos por nuestro ChatBot para Whatsapp y Telegram,
                            </div>
                        </div>
                    </div>
                    {/* SEGUNDA FILA: Texto Izquierda (oscuro), Imagen Derecha */}
                    <div className="col-6 seccion-gestion-col">
                        <div className="seccion-gestion-texto gestion-texto-izq">
                            <div className="gestion-titulo">
                                • Tu gestión documental<br />en un solo sitio
                            </div>
                            <div className="gestion-desc">
                                Firma de contrato, Foto del documento de identidad, evidencias de instalación, evidencias de soporte, fotos de fachadas, recibos de servicios públicos, en fin, cualquier archivo multimedia relacionado con el servicio puede ser almacenado en nuestra nube.
                            </div>
                        </div>
                        <div className="seccion-gestion-imgbox imgbox-der">
                            <img src={imgLaptopNube} alt="" className="img-laptop-nube" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}