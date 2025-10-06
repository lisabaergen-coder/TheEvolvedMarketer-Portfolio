import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ServicesPage from "./pages/ServicesPage";
import HirePage from "./pages/HirePage";
import AboutPage from "./pages/AboutPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;