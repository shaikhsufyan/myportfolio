import React from "react";
import Navbar from "./Components/Navbar";
import "./Components/portfolio.css"
import HeroSection from "./Components/HeroSection";
import AboutUs from "./Components/AboutUs";
import Skills from "./Components/Skills";
import ProjectSection from "./Components/ProjectSection"
import Channel from "./Components/Channel";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
     <>
      
       
      <Routes>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/skill" element={<Skills/>} />
        <Route path="/project" element={<ProjectSection/>} />
        <Route path="/youtube" element={<Channel/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Navbar/>
      {/* <HeroSection/> */}
      <AboutUs/>
      <Skills/>
      <ProjectSection/>
      <Channel/>
      <Contact/>
      <Footer/>
     </>
      
  );
}

export default App;
