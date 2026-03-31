import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Values from './components/Values'
import Stats from './components/Stats'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import RecentProjects from './components/RecentProjects'
import QuoteCTA from './components/QuoteCTA'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonials />
      <Clients />
      <RecentProjects />
      <QuoteCTA />
      <Footer />

      {/* Back to top */}
      <BackToTop />
    </>
  )
}

function BackToTop() {
  return (
    <a
      href="#home"
      className="back-to-top"
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </a>
  )
}
