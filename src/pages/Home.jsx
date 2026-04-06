import { useEffect } from 'react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import HowItWorks from '../components/HowItWorks'
import Conditions from '../components/Conditions'
import AboutProfessional from '../components/AboutProfessional'
import Testimonials from '../components/Testimonials'
import ServiceArea from '../components/ServiceArea'
import VaccinesSection from '../components/VaccinesSection'
import InstagramSection from '../components/InstagramSection'
import FAQ from '../components/FAQ'
import FooterCTA from '../components/FooterCTA'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { initGA } from '../utils/analytics'
import { trackEvent } from '../utils/trackEvent'

const WHATSAPP_NUMBER = '5551999999999'

export default function Home() {
  useEffect(() => {
    initGA()
    trackEvent('page_view', { page: 'home' })
  }, [])

  const openWhatsAppHeader = () => {
    trackEvent('click_whatsapp_header', {
      section: 'header',
      event_category: 'lead',
    })

    const text = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre o atendimento.'
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

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
            <a href="#quem-sou-eu">Quem sou eu</a>
            <a href="#vacinas">Vacinas</a>
            <a href="#instagram">Instagram</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a href="#instagram" className="btn btn-secondary nav-btn-desktop">
              Instagram
            </a>

            <button className="btn btn-primary nav-btn-desktop" onClick={openWhatsAppHeader}>
              Agendar
            </button>

            <button
              className="mobile-header-wa"
              onClick={openWhatsAppHeader}
              aria-label="Falar no WhatsApp"
              title="Falar no WhatsApp"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M19.11 17.24c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.09 3.18 5.06 4.46.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.08-.12-.28-.2-.58-.35z" />
                <path d="M16.02 3.2c-7 0-12.67 5.66-12.67 12.65 0 2.22.58 4.39 1.68 6.29L3.2 28.8l6.84-1.8c1.83 1 3.9 1.53 5.98 1.53h.01c7 0 12.67-5.67 12.67-12.66 0-3.39-1.32-6.58-3.72-8.97-2.39-2.39-5.58-3.7-8.96-3.7zm0 23.12h-.01c-1.88 0-3.72-.5-5.34-1.44l-.38-.22-4.06 1.07 1.08-3.96-.25-.41a10.35 10.35 0 0 1-1.59-5.5c0-5.72 4.66-10.37 10.39-10.37 2.77 0 5.37 1.08 7.32 3.03a10.3 10.3 0 0 1 3.04 7.33c0 5.73-4.66 10.37-10.4 10.37z" />
              </svg>
            </button>
          </div>
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
        <InstagramSection />
        <FAQ />
        <FooterCTA />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer-top">
            <div className="site-footer-brand">
              <div className="site-footer-logo">
                <div className="brand-mark" />
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
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
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
                <a href="#instagram">Instagram</a>
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
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  )
}