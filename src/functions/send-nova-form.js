// src/functions/send-nova-form.js
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const DESTINO             = import.meta.env.VITE_EMAILJS_DESTINO;

let _inited = false;
export function initEmailJS() {
  if (!_inited) {
    if (!EMAILJS_PUBLIC_KEY) {
      console.error("Falta VITE_EMAILJS_PUBLIC_KEY en .env.local");
    }
    emailjs.init(EMAILJS_PUBLIC_KEY);
    _inited = true;
  }
}

/** payload: { pais, razonSocial, nit, subdominio, promo, email?, telefono? } */
export async function sendNovaForm(payload) {
  initEmailJS();

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !DESTINO) {
    throw new Error("Faltan variables de entorno de EmailJS");
  }

  const params = {
    to_email: DESTINO,
    pais: payload.pais || "",
    razon_social: payload.razonSocial || "",
    nit: payload.nit || "",
    subdominio: `${payload.subdominio || ""}.novaisp.co`,
    promo: payload.promo || "-",
    email_contacto: payload.email || "",
    telefono: payload.telefono || "",
    reply_to: payload.email || "",
    enviado_desde: "Página de registro",
  };

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
}
