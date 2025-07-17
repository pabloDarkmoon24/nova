import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import Navbar from "./components/navBar";
import { TopBanner } from "./components/topBanner";



function App() {
  return(
    <BrowserRouter>
      <TopBanner/>
      <Navbar />
      <Routes>
        <Route path="nova/" element={<Home/>} />
        <Route path="nova/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;