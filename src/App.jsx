import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Contact from "./components/contact/Contact.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import PremiumLoader from "./components/loader/PremiumLoader.jsx";
import Cursor from "./components/common/Cursor.jsx";
import SpaceBackground from "./components/common/SpaceBackground.jsx";
import "leaflet/dist/leaflet.css";

function App() {
  const [loadingPhase, setLoadingPhase] = useState(true);
  const location = useLocation();

  return (
    <>
      <Cursor />
      <SpaceBackground />
      {/* 1. Handle loading screen logic cleanly without interfering with router internals */}
      <AnimatePresence mode="wait">
        {loadingPhase && (
          <PremiumLoader onComplete={() => setLoadingPhase(false)} />
        )}
      </AnimatePresence>

      {/* 2. Standard App Router Layout */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
