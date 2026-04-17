import { trackEvent } from '../utils/trackEvent'

const WHATSAPP_NUMBER = '5551992806633'
const INSTAGRAM_URL = 'https://instagram.com/vet.eduardapata'

export default function Hero({
  badge = 'Fisioterapia veterinária domiciliar em Porto Alegre',
  title = (
    <>
      Fisioterapia veterinária
      <br />
      em Porto Alegre
      <br />
      para cães e gatos
    </>
  ),
  description = (
    <>
      Atendimento domiciliar com foco em reabilitação veterinária, alívio da dor,
      recuperação pós-operatória, melhora da mobilidade e qualidade de vida do seu pet.
      Um cuidado técnico, acolhedor e individualizado para a rotina real da família.
    </>
  ),
  whatsappText = 'Olá! Gostaria de saber mais sobre fisioterapia veterinária domiciliar para meu pet.',
  miniPills = ['Atendimento domiciliar', 'Reabilitação veterinária', 'Porto Alegre e região'],
}) {
  const openWhatsApp = () => {
    trackEvent('click_whatsapp_hero', { section: 'hero' })

    const text = encodeURIComponent(whatsappText)
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
          <div className="hero-top">
            <div className="hero-copy">
              <div className="badge">{badge}</div>

              <h1>{title}</h1>

              <p>{description}</p>

              <div className="hero-actions">
                <button className="btn btn-primary" onClick={openWhatsApp}>
                  Agendar pelo WhatsApp
                </button>

                <button className="btn btn-secondary" onClick={openInstagram}>
                  Ver Instagram
                </button>
              </div>

              <div className="hero-mini-info">
                {miniPills.map((item) => (
                  <div className="hero-mini-pill" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-blob-1" />
              <div className="hero-blob-2" />
              <div className="hero-blob-3" />
              <div className="hero-ring" />

              <div className="hero-photo-card">
                <div className="hero-photo" />
                <div className="hero-photo-glow" />

                <div className="hero-floating-label hero-floating-label-top">
                  <strong>Cuidado humanizado</strong>
                  <span>mais acolhimento para o pet e para a família</span>
                </div>
              </div>

              <div className="floating-mini-card card-b">
                <strong>Plano individual</strong>
                <span>Cada caso é conduzido com atenção ao contexto real do pet.</span>
              </div>

              <div className="floating-mini-card card-c">
                <strong>Reabilitação veterinária</strong>
                <span>Abordagem técnica com olhar humano e acolhedor.</span>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
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