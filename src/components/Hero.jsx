import { trackEvent } from '../utils/trackEvent'

const WHATSAPP_NUMBER = '5551999999999'
const INSTAGRAM_URL = 'https://instagram.com/seuinstagram'

export default function Hero() {
  const openWhatsApp = () => {
    trackEvent('click_whatsapp_hero', {
      section: 'hero',
    })

    const text = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre fisioterapia veterinária domiciliar para meu pet.'
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  const openInstagram = () => {
    trackEvent('click_instagram', {
      section: 'hero',
    })

    window.open(INSTAGRAM_URL, '_blank')
  }

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="badge">Atendimento domiciliar em Porto Alegre e região</div>

          <h1>
            Fisioterapia veterinária
            <br />
            com cuidado real,
            <br />
            no conforto da sua casa.
          </h1>

          <p>
            Atendimento personalizado para pets em recuperação, com dor, mobilidade reduzida
            ou necessidade de reabilitação. Mais conforto para o animal, mais praticidade
            para a família e um cuidado muito mais humanizado.
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
            <div className="hero-point">• Atendimento em casa</div>
            <div className="hero-point">• Avaliação individual</div>
            <div className="hero-point">• Casos ortopédicos e neurológicos</div>
            <div className="hero-point">• Mais conforto para o pet</div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-image" />
          <div className="hero-card-body">
            <div className="hero-metrics">
              <div className="metric-card">
                <strong>Casa</strong>
                <span>Menos estresse e mais adaptação à rotina do pet.</span>
              </div>

              <div className="metric-card">
                <strong>Cuidado</strong>
                <span>Conduta personalizada conforme avaliação clínica.</span>
              </div>

              <div className="metric-card">
                <strong>Evolução</strong>
                <span>Acompanhamento focado em mobilidade e qualidade de vida.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}