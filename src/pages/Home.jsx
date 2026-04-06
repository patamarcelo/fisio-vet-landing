import { useEffect } from 'react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import HowItWorks from '../components/HowItWorks'
import Conditions from '../components/Conditions'
import Testimonials from '../components/Testimonials'
import ServiceArea from '../components/ServiceArea'
import VaccinesSection from '../components/VaccinesSection'
import InstagramSection from '../components/InstagramSection'
import FAQ from '../components/FAQ'
import FooterCTA from '../components/FooterCTA'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { initGA } from '../utils/analytics'
import { trackEvent } from '../utils/trackEvent'

export default function Home() {
  useEffect(() => {
    initGA()
    trackEvent('page_view', { page: 'home' })
  }, [])

  return (
    <div className="page-shell">
      <div className="bg-shape-a" />
      <div className="bg-shape-b" />

      <Seo />

      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="brand">
            <div className="brand-mark" />
            <span>FisioVet Domiciliar</span>
          </a>

          <nav className="nav-links">
            <a href="#beneficios">Benefícios</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#casos">Casos</a>
            <a href="#vacinas">Vacinas</a>
            <a href="#instagram">Instagram</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a href="#instagram" className="btn btn-secondary">
              Instagram
            </a>
            <a href="#top" className="btn btn-primary">
              Agendar
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Conditions />
        <Testimonials />
        <ServiceArea />
        <VaccinesSection />
        <InstagramSection />
        <FAQ />
        <FooterCTA />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <span>Fisioterapia Veterinária Domiciliar • Porto Alegre e região</span>
            <span>Versão 2.1 com hero ampliado, botão flutuante redondo e seção de vacinas</span>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  )
}