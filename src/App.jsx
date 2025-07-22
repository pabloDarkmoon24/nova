import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import Navbar from "./components/navBar";
import { TopBanner } from "./components/topBanner";
import { ManualPage } from "./pages/manuales";
import { ContactoPage } from "./pages/contacto";
import { AnimatePresence, motion } from "framer-motion";

// Componente para manejar las rutas con animación
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="nova/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="nova/manuales"
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <ManualPage />
            </motion.div>
          }
        />
        <Route
          path="nova/contacto"
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <ContactoPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <TopBanner />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
