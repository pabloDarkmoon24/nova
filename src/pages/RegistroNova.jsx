// src/pages/RegistroNova.jsx
import { useState } from "react";
import "../styles/registroNova.css";
import logo from "../assets/navBar/Logo-NOVA.png";
import { Footer } from "../components/footer";

// Códigos válidos (ajústalos cuando quieras)
const VALID_PROMOS = new Set(["NOVAEXPO", "NOVASIGO"]);

// 🔌 Punto ÚNICO de integración:
// Reemplaza el contenido de esta función por tu integración real (EmailJS / API).
async function submitLead(payload) {
  // Ejemplo para conectar luego:
  // return await sendNovaForm(payload);
  // Por ahora simulamos éxito:
  await new Promise((r) => setTimeout(r, 500));
}

export function RegistroPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    setErr("");
    setOk(false);

    const fd = new FormData(form);
    const payload = {
      telefono: fd.get("telefono")?.toString().trim() || "",
      promo: fd.get("promo")?.toString().trim() || "",
      hp: fd.get("website")?.toString() || "", // honeypot anti-bots
    };

    // ✅ Validación teléfono: al menos 7 dígitos
    const digitsCount = (payload.telefono.match(/\d/g) || []).length;
    if (digitsCount < 7) {
      setLoading(false);
      setErr("Teléfono inválido. Debe contener al menos 7 dígitos.");
      return;
    }

    // ✅ Validación promo: obligatoria y válida
    const promoNorm = payload.promo.toUpperCase();
    if (!VALID_PROMOS.has(promoNorm)) {
      setLoading(false);
      setErr("Código promocional inválido. Usa NOVAEXPO o NOVASIGO.");
      return;
    }

    // 🕷️ Honeypot: si viene relleno, asumimos bot y finalizamos en “ok”
    if (payload.hp) {
      setLoading(false);
      form.reset?.();
      setOk(true);
      return;
    }

    try {
      await submitLead({ telefono: payload.telefono, promo: promoNorm });
      form.reset?.();
      setOk(true);
    } catch (e2) {
      setErr(e2?.message || "No se pudo enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section id="registro-nova" className="rn-section">
        <div className="rn-wrap">
          {/* Panel izquierdo */}
          <div className="rn-left">
            <img src={logo} alt="Nova Logo" className="rn-logo" />
            <p className="rn-left-sub">
              Nova gestión total, la herramienta más completa y potente para la
              gestión de tu ISP.
            </p>
          </div>

          {/* Formulario (solo teléfono y promo) */}
          <div className="rn-card">
            <h3 className="rn-title">
              Descubre las herramientas
              <br /> que Nova tiene para ti
            </h3>
            <p className="rn-sub">prueba nuestro software por 30 días sin costo</p>

            <form onSubmit={onSubmit} className="rn-form" noValidate>
              {/* Honeypot (oculto) */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="rn-hp"
              />

              <label className="rn-field">
                <span>Teléfono</span>
                <input
                  name="telefono"
                  inputMode="tel"
                  placeholder="+57 300 123 4567"
                  required
                />
              </label>

              <label className="rn-field">
                <span>Código promocional (obligatorio)</span>
                <input
                  name="promo"
                  placeholder="NOVAEXPO o NOVASIGO"
                  required
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.toUpperCase();
                  }}
                />
              </label>

              {err && <div className="rn-msg rn-err">{err}</div>}
              {ok && (
                <div className="rn-msg rn-ok">
                  ¡Listo! Enviado correctamente. Te contactaremos al número registrado.
                </div>
              )}

              <button className="rn-btn" disabled={loading}>
                {loading ? "ENVIANDO..." : "SOLICITAR PRUEBA GRATUITA ↗"}
              </button>
            </form>
          </div>
          
        </div>
        
      </section>

    </main>
    
  );
}
