import { trackEvent } from '../utils/trackEvent'

const WHATSAPP_NUMBER = '5551992806633'
const INSTAGRAM_URL = 'https://instagram.com/seuinstagram'

export default function FooterCTA() {
  const openWhatsApp = () => {
    trackEvent('click_whatsapp_footer', {
      section: 'footer_cta',
      event_category: 'lead',
    })

    const text = encodeURIComponent(
      'Olá! Quero agendar uma avaliação de fisioterapia veterinária domiciliar.'
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  const openInstagram = () => {
    trackEvent('click_instagram', {
      section: 'footer_cta',
    })

    window.open(INSTAGRAM_URL, '_blank')
  }

  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner-inner">
            <div>
              <h3>Seu pet merece um cuidado mais próximo, técnico e acolhedor.</h3>
              <p>
                Se você está buscando atendimento domiciliar em Porto Alegre e região,
                o primeiro passo pode começar agora por uma mensagem simples no WhatsApp.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={openWhatsApp}>
                Falar no WhatsApp
              </button>

              <button className="btn btn-secondary" onClick={openInstagram}>
                Ver Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}