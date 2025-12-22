import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="App bg-black">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Vision />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
