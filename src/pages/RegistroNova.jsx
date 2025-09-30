import { useState } from "react";
import "../styles/registroNova.css";
import { sendNovaForm } from "../functions/send-nova-form";
import logo from '../assets/navBar/Logo-NOVA.png';

const PAISES = ["Colombia", "Otro"];
const VALID_PROMOS = new Set(["NOVAEXPO", "NOVASIGO"]);

export function RegistroPage() {
  const [loading, setLoading] = useState(false);
  const [ok,     setOk]     = useState(false);
  const [err,    setErr]    = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    setErr("");
    setOk(false);

    const fd = new FormData(form);
    const payload = {
      pais:        fd.get("pais")?.toString() || "",
      razonSocial: fd.get("razonSocial")?.toString().trim() || "",
      nit:         fd.get("nit")?.toString().trim() || "",
      subdominio:  fd.get("subdominio")?.toString().trim().toLowerCase() || "",
      promo:       fd.get("promo")?.toString().trim() || "",
      email:       fd.get("email")?.toString().trim() || "",
      telefono:    fd.get("telefono")?.toString().trim() || "",
      hp:          fd.get("website")?.toString() || ""
    };

    // Validaciones
    const subOk = /^[a-z0-9-]{3,30}$/.test(payload.subdominio);
    if (!payload.razonSocial || !payload.nit || !subOk) {
      setLoading(false);
      setErr("Revisa los datos: Razón social/NIT obligatorios y subdominio válido (a-z, 0-9, guion).");
      return;
    }

    // Email simple
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    if (!emailOk) {
      setLoading(false);
      setErr("Correo inválido. Ej: usuario@dominio.com");
      return;
    }

    // Teléfono: al menos 7 dígitos
    const digits = (payload.telefono.match(/\d/g) || []).length;
    if (digits < 7) {
      setLoading(false);
      setErr("Teléfono inválido. Debe contener al menos 7 dígitos.");
      return;
    }

    // Promo válida
    const promoNorm = (payload.promo || "").toUpperCase();
    if (!VALID_PROMOS.has(promoNorm)) {
      setLoading(false);
      setErr("Código promocional inválido. Usa NOVAEXPO o NOVASIGO.");
      return;
    }

    // Honeypot
    if (payload.hp) {
      setLoading(false);
      if (form?.reset) form.reset();
      setOk(true);
      return;
    }

    try {
      await sendNovaForm(payload);
      if (form?.reset) form.reset();
      setOk(true);
    } catch (e2) {
      setErr(e2?.text || e2?.message || "No se pudo enviar. Intenta de nuevo.");
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
              Nova gestión total, la herramienta más completa y potente para la gestión de tu ISP.
            </p>
          </div>

          {/* Formulario */}
          <div className="rn-card">
            <h3 className="rn-title">Descubre las herramientas<br/>que Nova tiene para ti</h3>
            <p className="rn-sub">prueba nuestro software por 30 días sin costo</p>

            <form onSubmit={onSubmit} className="rn-form" noValidate>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="rn-hp" />

              <label className="rn-field">
                <span>País</span>
                <select name="pais" defaultValue="Colombia">
                  {PAISES.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </label>

              <label className="rn-field">
                <span>Razón Social</span>
                <input name="razonSocial" placeholder="Razón Social" required />
              </label>

              <label className="rn-field">
                <span>NIT</span>
                <input name="nit" placeholder="Nit" required />
              </label>

              {/* NUEVOS CAMPOS */}
              <label className="rn-field">
                <span>Correo de contacto</span>
                <input type="email" name="email" placeholder="tu@correo.com" required />
              </label>

              <label className="rn-field">
                <span>Teléfono</span>
                <input name="telefono" placeholder="+57 300 123 4567" required />
              </label>

              <label className="rn-field">
                <span>Subdominio</span>
                <div className="rn-input-group">
                  <input name="subdominio" placeholder="sub dominio" required />
                  <span className="rn-suffix">.novaisp.co</span>
                </div>
              </label>

              <label className="rn-field">
                <span>Código promocional (obligatorio)</span>
                <input
                  name="promo"
                  placeholder="NOVAEXPO o NOVASIGO"
                  required
                  onInput={(e) => { e.currentTarget.value = e.currentTarget.value.toUpperCase(); }}
                />
              </label>

              {err && <div className="rn-msg rn-err">{err}</div>}
              {ok  && <div className="rn-msg rn-ok">¡Listo! Enviado correctamente, un asesor se pondrá en contacto contigo.</div>}

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
