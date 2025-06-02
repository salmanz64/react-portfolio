import AboutSection from "./components/AboutSection"
import EmailSection from "./components/EmailSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProjectSection from "./components/ProjectSection"
import './page.css'

export default function Home() {
  return <main className="flex min-h-screen flex-col bg-[#121212] " >
    
    <div id='stars'></div>
  <div id='stars2'></div>
  <div id='stars3'></div>
    <Navbar/>
    <div className="container mt-15 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      
    </div>
    <Footer/>
  </main>
  
}
