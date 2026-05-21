import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import UploadSection from "./components/UploadSection"
import Dashboard from "./components/Dashboard"
import Features from "./components/Features"
import About from "./components/About"
import Footer from "./components/Footer"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import ResumePreview from "./components/ResumePreview"
import CursorGlow from "./components/CursorGlow"
import CTA from "./components/CTA"

function App() {

  const [resumeData, setResumeData] = useState(null)

  return (

    <>
      <CursorGlow />
      <Navbar />

      <Hero />
      
       <Stats />
      <UploadSection setResumeData={setResumeData} />

      {resumeData && (
        <Dashboard resumeData={resumeData} />
      )}

      <Features />
      <ResumePreview />
      <Testimonials />
      
      <CTA />
      <About />

      <Footer />

    </>

  )
}

export default App
