import { trackEvent } from '../utils/trackEvent'

const WHATSAPP_NUMBER = '5551999999999'
const INSTAGRAM_URL = 'https://instagram.com/seuinstagram'

export default function Hero() {
  const openWhatsApp = () => {
    trackEvent('click_whatsapp_hero', { section: 'hero' })

    const text = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre fisioterapia veterinária domiciliar para meu pet.'
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  const openInstagram = () => {
    trackEvent('click_instagram', { section: 'hero' })
    window.open(INSTAGRAM_URL, '_blank')
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="badge">Fisioterapia e reabilitação veterinária em Porto Alegre</div>

            <div className="hero-headline-wrap">
              <div>
                <h1>
                  Cuidado,
                  <br />
                  movimento
                  <br />
                  e conforto
                  <br />
                  para o seu pet.
                </h1>

                <p>
                  Atendimento domiciliar com uma abordagem acolhedora, individualizada e focada
                  em reabilitação, mobilidade e qualidade de vida. Um cuidado técnico, humano
                  e pensado para a rotina real da família.
                </p>

                <div className="hero-actions">
                  <button className="btn btn-primary" onClick={openWhatsApp}>
                    Agendar pelo WhatsApp
                  </button>

                  <button className="btn btn-secondary" onClick={openInstagram}>
                    Ver Instagram
                  </button>
                </div>

                <div className="hero-points">
                  <div className="hero-point">Atendimento domiciliar</div>
                  <div className="hero-point">Pós-operatório e reabilitação</div>
                  <div className="hero-point">Porto Alegre e região</div>
                  <div className="hero-point">Mais conforto para o pet</div>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-blob-1" />
                <div className="hero-blob-2" />
                <div className="hero-blob-3" />

                <div className="hero-photo-card">
                  <div className="hero-photo" />
                </div>

                <div className="floating-mini-card card-a">
                  <strong>Atendimento domiciliar</strong>
                  <span>Mais conforto e menos desgaste para o animal.</span>
                </div>

                <div className="floating-mini-card card-b">
                  <strong>Porto Alegre e região</strong>
                  <span>Disponibilidade sob consulta conforme localização.</span>
                </div>

                <div className="floating-mini-card card-c">
                  <strong>Reabilitação veterinária</strong>
                  <span>Abordagem técnica com olhar humano e acolhedor.</span>
                </div>
              </div>
            </div>

            <div className="trust-strip">
              <div className="trust-item">
                <strong>Atendimento em casa</strong>
                <span>Mais adaptação à rotina e menos estresse no deslocamento.</span>
              </div>

              <div className="trust-item">
                <strong>Plano individual</strong>
                <span>Cada caso é avaliado de forma personalizada e segura.</span>
              </div>

              <div className="trust-item">
                <strong>Foco funcional</strong>
                <span>Mobilidade, conforto, recuperação e qualidade de vida.</span>
              </div>

              <div className="trust-item">
                <strong>Contato próximo</strong>
                <span>Orientações claras para a família acompanhar a evolução.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}