import { trackEvent } from '../utils/trackEvent'

const WHATSAPP_NUMBER = '5551992806633'

export default function VaccinesSection() {
  const handleClick = () => {
    trackEvent('click_whatsapp_vaccines', {
      section: 'vaccines',
      event_category: 'lead',
    })

    const text = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre vacinas e atendimento veterinário.'
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  const items = [
    {
      title: 'Prevenção e cuidado contínuo',
      description:
        'Vacinação é um pilar essencial para proteger a saúde do pet e manter o acompanhamento preventivo em dia.',
    },
    {
      title: 'Mais praticidade para a família',
      description:
        'Quando bem integrada à rotina do atendimento, a vacinação agrega conveniência e segurança.',
    },
    {
      title: 'Relação de confiança',
      description:
        'Além da reabilitação, a vacinação fortalece o vínculo com a família e amplia a percepção de cuidado completo.',
    },
    {
      title: 'Produto estratégico',
      description:
        'É um serviço importante do ponto de vista clínico e comercial, porque atende uma necessidade real e recorrente.',
    },
  ]

  return (
    <section className="section" id="vacinas">
      <div className="container">
        <div className="vaccine-grid premium-vaccine-grid">
          <div className="vaccine-visual premium-vaccine-visual">
            <div className="vaccine-visual-badge">
              <strong>Vacinas e prevenção</strong>
              <span>mais cuidado ao longo de toda a jornada do pet</span>
            </div>
          </div>

          <div className="vaccine-panel premium-vaccine-panel">
            <div className="badge">Vacinas e prevenção</div>
            <h2 className="section-title">Um serviço importante, recorrente e valioso para comunicar.</h2>
            <p className="section-subtitle">
              Além da fisioterapia e da reabilitação, a vacinação fortalece o posicionamento
              profissional, amplia a jornada de cuidado e reforça confiança na rotina de saúde do pet.
            </p>

            <div className="vaccine-list">
              {items.map((item) => (
                <div className="vaccine-item premium-vaccine-item" key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>

            <div style={{ height: 22 }} />

            <button className="btn btn-primary" onClick={handleClick}>
              Tirar dúvidas sobre vacinas
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}