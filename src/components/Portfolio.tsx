import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import ThemeToggle from "./ui/ThemeToggle";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-main text-main">
      {/* Floating theme toggle visible on all sections */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
