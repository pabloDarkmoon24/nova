// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Home } from "./pages/home";
import Navbar from "./components/navBar";
import { TopBanner } from "./components/topBanner";
import { ManualPage } from "./pages/manuales";
import { ContactoPage } from "./pages/contacto";
import { RegistroPage } from "./pages/RegistroNova";

import { NovaManualPage } from "./pages/manuales/nova";
import { PrimerosPasosPage } from "./pages/manuales/PrimerosPasos";
import { NovaManualGrowPage } from "./pages/manuales/migracion";
import { AsistenteIaManualPage } from "./pages/manuales/IadeNova";

function MotionWrap({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="nova/"
          element={
            <MotionWrap>
              <Home />
            </MotionWrap>
          }
        />

        <Route
          path="nova/manuales"
          element={
            <MotionWrap>
              <ManualPage />
            </MotionWrap>
          }
        />

        {/* ✅ Primeros pasos (la que faltaba) */}
        <Route
          path="nova/manuales/primeros-pasos"
          element={
            <MotionWrap>
              <PrimerosPasosPage/>
            </MotionWrap>
          }
        />

        {/* ✅ Nueva página del ítem “NOVA” */}
        <Route
          path="nova/manuales/nova"
          element={
            <MotionWrap>
              <NovaManualPage />
            </MotionWrap>
          }
        />
        <Route
          path="nova/manuales/Migracion"
          element={<MotionWrap><NovaManualGrowPage /></MotionWrap>}
        />
        <Route
          path="nova/manuales/asistente-ia"
          element={
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.4 }}>
              <AsistenteIaManualPage />
            </motion.div>
          }
        />
        <Route
          path="nova/registro"
          element={
            <MotionWrap>
              <RegistroPage />
            </MotionWrap>
          }
        />

        <Route
          path="nova/contacto"
          element={
            <MotionWrap>
              <ContactoPage />
            </MotionWrap>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TopBanner />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
