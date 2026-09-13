import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer.jsx";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Openings from "./Pages/Openings";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/openings" element={<Openings />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}
export default App;
