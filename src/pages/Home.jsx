import { useEffect, useState } from 'react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import HowItWorks from '../components/HowItWorks'
import Conditions from '../components/Conditions'
import AboutProfessional from '../components/AboutProfessional'
import Testimonials from '../components/Testimonials'
import ServiceArea from '../components/ServiceArea'
import VaccinesSection from '../components/VaccinesSection'
import FAQ from '../components/FAQ'
import FooterCTA from '../components/FooterCTA'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { initGA } from '../utils/analytics'
import { trackEvent } from '../utils/trackEvent'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    initGA()
    trackEvent('page_view', { page: 'home' })
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  return (
    <div className="page-shell">
      <div className="bg-shape-a" />
      <div className="bg-shape-b" />

      <Seo />

      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="brand" onClick={closeMobileMenu}>
            <div className="brand-mark">
              <svg viewBox="0 0 64 64">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#c96f2d" />
                    <stop offset="100%" stopColor="#f0a64a" />
                  </linearGradient>
                </defs>

                <rect width="64" height="64" rx="18" fill="url(#g)" />
                <circle cx="22" cy="28" r="6" fill="white" />
                <circle cx="42" cy="28" r="6" fill="white" />
                <circle cx="32" cy="20" r="5" fill="white" />
                <ellipse cx="32" cy="40" rx="10" ry="7" fill="white" />
              </svg>
            </div>
            <span>FisioVet Domiciliar</span>
          </a>

          <nav className="nav-links">
            <a href="#beneficios">Benefícios</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#casos">Casos</a>
            <a href="#quem-sou-eu">Quem sou eu</a>
            <a href="#vacinas">Vacinas</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a href="#instagram" className="btn btn-secondary nav-btn-desktop">
              Instagram
            </a>

            <a 
            href={`https://wa.me/5551992806633?text=${encodeURIComponent(
                'Olá! Gostaria de agendar uma avaliação para meu pet.'
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                trackEvent('click_whatsapp_mobile_menu', {
                  section: 'mobile_menu',
                  event_category: 'lead',
                })
                closeMobileMenu()
              }}
            
            className="btn btn-primary nav-btn-desktop">
              Agendar
            </a>

            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'is-open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div
          className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
          onClick={closeMobileMenu}
        />

        <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
          <div className="mobile-menu-header">
            <strong>Menu</strong>
            <button
              className="mobile-menu-close"
              onClick={closeMobileMenu}
              aria-label="Fechar menu"
              type="button"
            >
              ×
            </button>
          </div>

          <nav className="mobile-menu-links">
            <a href="#beneficios" onClick={closeMobileMenu}>Benefícios</a>
            <a href="#como-funciona" onClick={closeMobileMenu}>Como funciona</a>
            <a href="#casos" onClick={closeMobileMenu}>Casos</a>
            <a href="#quem-sou-eu" onClick={closeMobileMenu}>Quem sou eu</a>
            <a href="#vacinas" onClick={closeMobileMenu}>Vacinas</a>
            <a href="#faq" onClick={closeMobileMenu}>Perguntas frequentes</a>
            <a
              href={`https://wa.me/5551992806633?text=${encodeURIComponent(
                'Olá! Gostaria de agendar uma avaliação para meu pet.'
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                trackEvent('click_whatsapp_mobile_menu', {
                  section: 'mobile_menu',
                  event_category: 'lead',
                })
                closeMobileMenu()
              }}
            >
              Agendar avaliação
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Conditions />
        <AboutProfessional />
        <Testimonials />
        <ServiceArea />
        <VaccinesSection />
        <FAQ />
        <FooterCTA />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer-top">
            <div className="site-footer-brand">
              <div className="site-footer-logo">
                <img src="/favicon.svg" alt="FisioVet" className="brand-mark" />
                <div>
                  <strong>FisioVet Domiciliar</strong>
                  <span>Fisioterapia e reabilitação veterinária em Porto Alegre e região</span>
                </div>
              </div>

              <p>
                Atendimento com foco em mobilidade, conforto, reabilitação e cuidado próximo
                da rotina do pet, com uma apresentação profissional, acolhedora e confiável.
              </p>

              <div className="site-footer-contact-list">
                <a href="https://wa.me/5551992806633" target="_blank" rel="noreferrer">
                  <span className="footer-icon">💬</span>
                  <span>WhatsApp para agendamentos</span>
                </a>

                <a href="https://instagram.com/vet.eduardapata" target="_blank" rel="noreferrer">
                  <span className="footer-icon">📷</span>
                  <span>@vet.eduardapata</span>
                </a>

                <span>
                  <span className="footer-icon">📍</span>
                  <span>Porto Alegre e região</span>
                </span>
              </div>
            </div>

            <div className="site-footer-columns">
              <div className="site-footer-column">
                <h4>Navegação</h4>
                <a href="#beneficios">Benefícios</a>
                <a href="#como-funciona">Como funciona</a>
                <a href="#casos">Casos</a>
                <a href="#quem-sou-eu">Quem sou eu</a>
              </div>

              <div className="site-footer-column">
                <h4>Atendimento</h4>
                <a href="#vacinas">Vacinas</a>
                <a href="#faq">Perguntas frequentes</a>
                <a href="#top">Agendar avaliação</a>
              </div>

              <div className="site-footer-column">
                <h4>Destaques</h4>
                <span>Atendimento domiciliar</span>
                <span>Reabilitação veterinária</span>
                <span>Mobilidade e conforto</span>
                <span>Região sob consulta</span>
              </div>
            </div>
          </div>

          <div className="site-footer-bottom">
            <span>© 2026 FisioVet Domiciliar. Todos os direitos reservados.</span>
            <span>Atendimento domiciliar em Porto Alegre e região metropolitana.</span>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  )
}