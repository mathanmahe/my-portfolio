import React from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import TeachingExperience from "./components/TeachingExperience"
import WorkExperience from "./components/WorkExperience"


export default function App() {
  return (
    <main className = "text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <TeachingExperience />
      <Contact />
    </main>
  )
}
