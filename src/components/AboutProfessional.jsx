import { trackEvent } from '../utils/trackEvent'

const WHATSAPP_NUMBER = '5551992806633'
const INSTAGRAM_URL = 'https://instagram.com/vet.eduardapata'

export default function AboutProfessional() {
  const handleWhatsApp = () => {
    trackEvent('click_whatsapp_about', {
      section: 'about_professional',
      event_category: 'lead',
    })

    const text = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre o atendimento veterinário domiciliar.'
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  const handleInstagram = () => {
    trackEvent('click_instagram', {
      section: 'about_professional',
    })

    window.open(INSTAGRAM_URL, '_blank')
  }

  return (
    <section className="section" id="quem-sou-eu">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo-wrap">
            <div className="about-photo" />
            <div className="about-photo-overlay" />

            <div className="about-badge about-badge-a">
              <strong>Atendimento humanizado</strong>
              <span>Cuidado próximo, técnico e acolhedor.</span>
            </div>

            <div className="about-badge about-badge-b">
              <strong>Porto Alegre e região</strong>
              <span>Disponibilidade sob consulta.</span>
            </div>
          </div>

          <div className="about-content">
            <div className="badge">Quem está por trás do atendimento</div>

            <h2 className="section-title">
              Um cuidado profissional,
              <br />
              próximo e feito com presença real.
            </h2>

            <p className="section-subtitle">
              Neste tipo de serviço, as famílias não querem conhecer apenas o atendimento.
              Elas querem saber também quem é a profissional que estará presente na rotina do pet.
            </p>

            <div style={{ height: 20 }} />

            <div className="about-card">
              <div className="about-name-row">
                <div className="about-name-avatar">EP</div>
                <div>
                  <h3>Eduarda Pata</h3>
                  <div className="about-role">Fisioterapia e reabilitação veterinária</div>
                </div>
              </div>

              <p>
                Atendimento com foco em reabilitação, mobilidade, acompanhamento individualizado
                e qualidade de vida do pet. A proposta é unir técnica, sensibilidade e proximidade
                com a família para construir uma jornada mais leve, segura e eficiente.
              </p>
            </div>

            <div className="about-highlights">
              <div className="about-highlight">
                <strong>Abordagem individual</strong>
                <span>Cada caso é avaliado com atenção ao quadro clínico, à rotina e ao contexto do animal.</span>
              </div>

              <div className="about-highlight">
                <strong>Olhar funcional</strong>
                <span>O foco está em mobilidade, conforto, autonomia e bem-estar no dia a dia do pet.</span>
              </div>

              <div className="about-highlight">
                <strong>Marca pessoal com estrutura profissional</strong>
                <span>Uma apresentação mais humana, sem perder seriedade, confiança e acabamento premium.</span>
              </div>
            </div>

            <div className="about-actions">
              <button className="btn btn-primary" onClick={handleWhatsApp}>
                Falar no WhatsApp
              </button>

              <button className="btn btn-secondary" onClick={handleInstagram}>
                Ver Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}